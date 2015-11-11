var debug = require("debug")("app");
var fs = require("fs");
var cors = require("cors");
var thrift = require("thrift");
var Logger = require("./logservice/LogService");
var ttypes = require("./logservice/LogService_types");

/* Current logging directory */
var dir = __dirname;
/* Handle to log file (fs.fd), relative to current working directory */
var file = false;
/* List of filenames available in current working directory */
var fileList = [];
/* Logging start time in ms */
var initTime = 0;

/**
 * Gets the time in milliseconds with nanosecond resolution (not accuracy).
 * @return {number} Time in milliseconds with decimal to nanoseconds.
 */
var getHrTimeMs = function() {
  time = process.hrtime();
  return time[0] * 1000 + time[1] / 1000000;
}

/**
 * Updates the list of files in the current working directory.
 * @return {Array.<string>} Returns an array of file names relative to the
 *                          current working directory.
 *                          Returns an empty list if no files are found.
 */
var updateLogFileList = function() {
  fileList = [];
  var tempFileList = fs.readdirSync(process.cwd());
  debug('[updateLogFileList] Available files/dirs: ' + tempFileList);
  tempFileList.forEach(function(fileName) {
    var stat = fs.statSync(process.cwd() + '/' + fileName);
    if (stat.isFile()) {
      fileList.push(fileName);
    }
  });
  debug('[updateLogFileList] Filtered files: ' + fileList);
}

process.chdir(dir);
debug('Directory: ' + process.cwd());

var LoggerHandler = {
  /**
   * Gets the current logging directory.
   * @param {callback} result Callback with two params: err and response.
   * @return {string} Returns the current logging director (absolute path).
   */
  getLogDirectory: function(result) {
    result(null, dir);
  },

  /**
   * Gets a list of all available files in the current logging directory.
   * @param {callback} Result Callback with two params: err and response.
   * @return {Array.<string>} Returns an array of file names relative to the
   *                          current working directory.
   *                          Returns an empty list if no files are found.
   */
  getLogFileList: function(result) {
    updateLogFileList();
    result(null, fileList);
  },

  /**
   * Retrieves the contents of a file present in the fileList array, formatted
   * as an array of lines in the file (line separator is '\n').
   * @param {string} filename Name of file to retrieve, which should be present
   *                          in the list of files returned from getLogFileList.
   * @param {callback} result Callback with two params: err and response.
   * @return {Array.<string>} Returns an array of strings where each element is
   *                          a line in the given file.
   *                          Throws an error if the file is not found.
   */
  getLogFile: function(filename, result) {
    if (fileList.indexOf(filename) > -1) {
      debug('[GetLogFile] Retrieving file: ' + dir + '/' + filename);
      var contents = fs.readFileSync(dir + '/' + filename).toString().split('\n');
      debug('[GetLogFile] Contents: ' + contents);
      result(null, contents);
    } else {
      debug('[GetLogFile] File not found: ' + dir + '/' + filename);
      throw FileNotFound;
    }
  },

  /**
   * Starts logging to a file if the logger is currently not logging. If the
   * logger is logging, the response is false.
   * @param {string} filename Name of the file to log to in the current directory.
   * @param {callback} result Callback with two params: err and response.
   * @return {boolean} Returns true if the logger was not logging and it
   *                   successfully started logging to the given filename.
   *                   Returns false otherwise.
   */
  startLogging: function(filename, result) {
    if (!file) {
      file = fs.createWriteStream(dir + '/' + filename, {
        flags: 'w'
      })
        .on('error', function(err) {
          debug("[startLogging] error opening file: " + err);
          file.end();
          file = false;
          result(null, false);
        })
        .on('open', function() {
          debug("[startLogging] logging to file: " + filename);
          initTime = getHrTimeMs();
          updateLogFileList();
          result(null, true);
        });
    } else {
      result(null, false);
    }
  },

  /**
   * Returns whether the logger is logging to a file or not.
   * @param {callback} result Callback with two params: err and response.
   * @return {boolean} Returns true if the logger is busy.
   *                   Returns false otherwise.
   */
  isLogging: function(result) {
    result(null, (file !== false));
  },

  /**
   * Tells the logging service to cease logging to the current file.
   * @param {callback} result Callback with two params: err and response.
   * @return {boolean} Returns true.
   */
  stopLogging: function(result) {
    if (file) {
      debug("[stopLogging] stopping logging to file");
      file.end();
      file = false;
    }
    result(null, true);
  },

  /**
   * Logs a JSON-formatted message to the current file, if it is opened.
   * The format of the message is:
   *    {
   *      time: <current_time_ms>,
   *      level: <level>,
   *      message: <message>
   *    }
   * @param {LogService.Level} level Logging level (DEBUG, INFO, WARN, etc).
   * @param {string} message Message to log, preferrably JSON formatted.
   */
  log: function(level, message) {
    try {
      message = JSON.parse(message)
    } catch (e) { }
    jsonmsg = {
      'time': getHrTimeMs() - initTime,
      'level': level,
      'message': message
    };
    message = JSON.stringify(jsonmsg);
    if (file) {
      file.write(message + '\n');
    }
  }
};

/**
 * Create a local server to handle IPC logging
 */
var server = thrift.createServer(Logger, LoggerHandler).on('error', function(err) {
  // handle new errors as they arise
  switch (err.code) {
    case 'ECONNRESET':
      console.log("Client abruptly disconnected! (ECONNRESET)");
      break;
    default:
      console.log("Unknown error:\n\t" + err);
      break;
  }
});

console.log("Starting server");
server.listen(5001);


/**
 * Create an http server to handle web logging
 */
thrift.createWebServer({
  files: ".",
  cors: {
    "*": cors({
      origin: "localhost:3000"
    })
  },
  services: {
    "/logserv": {
      transport: thrift.TBufferedTransport,
      protocol: thrift.TJSONProtocol,
      processor: Logger,
      handler: LoggerHandler
    }
  }
}).listen(3001);
