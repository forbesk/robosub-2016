//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./LogService_types');
//HELPER FUNCTIONS AND STRUCTURES

LogService_setLogDirectory_args = function(args) {
  this.path = null;
  if (args) {
    if (args.path !== undefined && args.path !== null) {
      this.path = args.path;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field path is unset!');
    }
  }
};
LogService_setLogDirectory_args.prototype = {};
LogService_setLogDirectory_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.path = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_setLogDirectory_args.prototype.write = function(output) {
  output.writeStructBegin('LogService_setLogDirectory_args');
  if (this.path !== null && this.path !== undefined) {
    output.writeFieldBegin('path', Thrift.Type.STRING, 1);
    output.writeString(this.path);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_setLogDirectory_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
LogService_setLogDirectory_result.prototype = {};
LogService_setLogDirectory_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_setLogDirectory_result.prototype.write = function(output) {
  output.writeStructBegin('LogService_setLogDirectory_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_getLogFileList_args = function(args) {
};
LogService_getLogFileList_args.prototype = {};
LogService_getLogFileList_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_getLogFileList_args.prototype.write = function(output) {
  output.writeStructBegin('LogService_getLogFileList_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_getLogFileList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [null]);
    }
  }
};
LogService_getLogFileList_result.prototype = {};
LogService_getLogFileList_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_getLogFileList_result.prototype.write = function(output) {
  output.writeStructBegin('LogService_getLogFileList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_getLogFile_args = function(args) {
  this.filename = null;
  if (args) {
    if (args.filename !== undefined && args.filename !== null) {
      this.filename = args.filename;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field filename is unset!');
    }
  }
};
LogService_getLogFile_args.prototype = {};
LogService_getLogFile_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.filename = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_getLogFile_args.prototype.write = function(output) {
  output.writeStructBegin('LogService_getLogFile_args');
  if (this.filename !== null && this.filename !== undefined) {
    output.writeFieldBegin('filename', Thrift.Type.STRING, 1);
    output.writeString(this.filename);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_getLogFile_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof ttypes.FileNotFound) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
LogService_getLogFile_result.prototype = {};
LogService_getLogFile_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.err = new ttypes.FileNotFound();
        this.err.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_getLogFile_result.prototype.write = function(output) {
  output.writeStructBegin('LogService_getLogFile_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.err !== null && this.err !== undefined) {
    output.writeFieldBegin('err', Thrift.Type.STRUCT, 1);
    this.err.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_startLogging_args = function(args) {
  this.filename = null;
  if (args) {
    if (args.filename !== undefined && args.filename !== null) {
      this.filename = args.filename;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field filename is unset!');
    }
  }
};
LogService_startLogging_args.prototype = {};
LogService_startLogging_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.filename = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_startLogging_args.prototype.write = function(output) {
  output.writeStructBegin('LogService_startLogging_args');
  if (this.filename !== null && this.filename !== undefined) {
    output.writeFieldBegin('filename', Thrift.Type.STRING, 1);
    output.writeString(this.filename);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_startLogging_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
LogService_startLogging_result.prototype = {};
LogService_startLogging_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_startLogging_result.prototype.write = function(output) {
  output.writeStructBegin('LogService_startLogging_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_isLogging_args = function(args) {
};
LogService_isLogging_args.prototype = {};
LogService_isLogging_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_isLogging_args.prototype.write = function(output) {
  output.writeStructBegin('LogService_isLogging_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_isLogging_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
LogService_isLogging_result.prototype = {};
LogService_isLogging_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_isLogging_result.prototype.write = function(output) {
  output.writeStructBegin('LogService_isLogging_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_stopLogging_args = function(args) {
};
LogService_stopLogging_args.prototype = {};
LogService_stopLogging_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_stopLogging_args.prototype.write = function(output) {
  output.writeStructBegin('LogService_stopLogging_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_stopLogging_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
LogService_stopLogging_result.prototype = {};
LogService_stopLogging_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_stopLogging_result.prototype.write = function(output) {
  output.writeStructBegin('LogService_stopLogging_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_log_args = function(args) {
  this.level = null;
  this.message = null;
  if (args) {
    if (args.level !== undefined && args.level !== null) {
      this.level = args.level;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field level is unset!');
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
  }
};
LogService_log_args.prototype = {};
LogService_log_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.level = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_log_args.prototype.write = function(output) {
  output.writeStructBegin('LogService_log_args');
  if (this.level !== null && this.level !== undefined) {
    output.writeFieldBegin('level', Thrift.Type.I32, 1);
    output.writeI32(this.level);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_log_result = function(args) {
};
LogService_log_result.prototype = {};
LogService_log_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LogService_log_result.prototype.write = function(output) {
  output.writeStructBegin('LogService_log_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
LogServiceClient.prototype = {};
LogServiceClient.prototype.seqid = function() { return this._seqid; }
LogServiceClient.prototype.new_seqid = function() { return this._seqid += 1; }
LogServiceClient.prototype.setLogDirectory = function(path, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_setLogDirectory(path);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_setLogDirectory(path);
  }
};

LogServiceClient.prototype.send_setLogDirectory = function(path) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('setLogDirectory', Thrift.MessageType.CALL, this.seqid());
  var args = new LogService_setLogDirectory_args();
  args.path = path;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

LogServiceClient.prototype.recv_setLogDirectory = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new LogService_setLogDirectory_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('setLogDirectory failed: unknown result');
};
LogServiceClient.prototype.getLogFileList = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getLogFileList();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getLogFileList();
  }
};

LogServiceClient.prototype.send_getLogFileList = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getLogFileList', Thrift.MessageType.CALL, this.seqid());
  var args = new LogService_getLogFileList_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

LogServiceClient.prototype.recv_getLogFileList = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new LogService_getLogFileList_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getLogFileList failed: unknown result');
};
LogServiceClient.prototype.getLogFile = function(filename, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getLogFile(filename);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getLogFile(filename);
  }
};

LogServiceClient.prototype.send_getLogFile = function(filename) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getLogFile', Thrift.MessageType.CALL, this.seqid());
  var args = new LogService_getLogFile_args();
  args.filename = filename;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

LogServiceClient.prototype.recv_getLogFile = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new LogService_getLogFile_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getLogFile failed: unknown result');
};
LogServiceClient.prototype.startLogging = function(filename, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_startLogging(filename);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_startLogging(filename);
  }
};

LogServiceClient.prototype.send_startLogging = function(filename) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('startLogging', Thrift.MessageType.CALL, this.seqid());
  var args = new LogService_startLogging_args();
  args.filename = filename;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

LogServiceClient.prototype.recv_startLogging = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new LogService_startLogging_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('startLogging failed: unknown result');
};
LogServiceClient.prototype.isLogging = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_isLogging();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_isLogging();
  }
};

LogServiceClient.prototype.send_isLogging = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('isLogging', Thrift.MessageType.CALL, this.seqid());
  var args = new LogService_isLogging_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

LogServiceClient.prototype.recv_isLogging = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new LogService_isLogging_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('isLogging failed: unknown result');
};
LogServiceClient.prototype.stopLogging = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_stopLogging();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_stopLogging();
  }
};

LogServiceClient.prototype.send_stopLogging = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('stopLogging', Thrift.MessageType.CALL, this.seqid());
  var args = new LogService_stopLogging_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

LogServiceClient.prototype.recv_stopLogging = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new LogService_stopLogging_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('stopLogging failed: unknown result');
};
LogServiceClient.prototype.log = function(level, message, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_log(level, message);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_log(level, message);
  }
};

LogServiceClient.prototype.send_log = function(level, message) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('log', Thrift.MessageType.ONEWAY, this.seqid());
  var args = new LogService_log_args();
  args.level = level;
  args.message = message;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};
LogServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
LogServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

LogServiceProcessor.prototype.process_setLogDirectory = function(seqid, input, output) {
  var args = new LogService_setLogDirectory_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.setLogDirectory.length === 1) {
    Q.fcall(this._handler.setLogDirectory, args.path)
      .then(function(result) {
        var result = new LogService_setLogDirectory_result({success: result});
        output.writeMessageBegin("setLogDirectory", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("setLogDirectory", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.setLogDirectory(args.path, function (err, result) {
      if (err == null) {
        var result = new LogService_setLogDirectory_result((err != null ? err : {success: result}));
        output.writeMessageBegin("setLogDirectory", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("setLogDirectory", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

LogServiceProcessor.prototype.process_getLogFileList = function(seqid, input, output) {
  var args = new LogService_getLogFileList_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getLogFileList.length === 0) {
    Q.fcall(this._handler.getLogFileList)
      .then(function(result) {
        var result = new LogService_getLogFileList_result({success: result});
        output.writeMessageBegin("getLogFileList", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getLogFileList", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getLogFileList(function (err, result) {
      if (err == null) {
        var result = new LogService_getLogFileList_result((err != null ? err : {success: result}));
        output.writeMessageBegin("getLogFileList", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getLogFileList", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

LogServiceProcessor.prototype.process_getLogFile = function(seqid, input, output) {
  var args = new LogService_getLogFile_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getLogFile.length === 1) {
    Q.fcall(this._handler.getLogFile, args.filename)
      .then(function(result) {
        var result = new LogService_getLogFile_result({success: result});
        output.writeMessageBegin("getLogFile", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        if (err instanceof ttypes.FileNotFound) {
          var result = new LogService_getLogFile_result(err);
          output.writeMessageBegin("getLogFile", Thrift.MessageType.REPLY, seqid);
        } else {
          var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getLogFile", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getLogFile(args.filename, function (err, result) {
      if (err == null || err instanceof ttypes.FileNotFound) {
        var result = new LogService_getLogFile_result((err != null ? err : {success: result}));
        output.writeMessageBegin("getLogFile", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getLogFile", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

LogServiceProcessor.prototype.process_startLogging = function(seqid, input, output) {
  var args = new LogService_startLogging_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.startLogging.length === 1) {
    Q.fcall(this._handler.startLogging, args.filename)
      .then(function(result) {
        var result = new LogService_startLogging_result({success: result});
        output.writeMessageBegin("startLogging", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("startLogging", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.startLogging(args.filename, function (err, result) {
      if (err == null) {
        var result = new LogService_startLogging_result((err != null ? err : {success: result}));
        output.writeMessageBegin("startLogging", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("startLogging", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

LogServiceProcessor.prototype.process_isLogging = function(seqid, input, output) {
  var args = new LogService_isLogging_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.isLogging.length === 0) {
    Q.fcall(this._handler.isLogging)
      .then(function(result) {
        var result = new LogService_isLogging_result({success: result});
        output.writeMessageBegin("isLogging", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("isLogging", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.isLogging(function (err, result) {
      if (err == null) {
        var result = new LogService_isLogging_result((err != null ? err : {success: result}));
        output.writeMessageBegin("isLogging", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("isLogging", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

LogServiceProcessor.prototype.process_stopLogging = function(seqid, input, output) {
  var args = new LogService_stopLogging_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.stopLogging.length === 0) {
    Q.fcall(this._handler.stopLogging)
      .then(function(result) {
        var result = new LogService_stopLogging_result({success: result});
        output.writeMessageBegin("stopLogging", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("stopLogging", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.stopLogging(function (err, result) {
      if (err == null) {
        var result = new LogService_stopLogging_result((err != null ? err : {success: result}));
        output.writeMessageBegin("stopLogging", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("stopLogging", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

LogServiceProcessor.prototype.process_log = function(seqid, input, output) {
  var args = new LogService_log_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.log(args.level, args.message)
}

