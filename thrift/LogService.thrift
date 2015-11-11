/**
 * LogService
 * Basic vision daemon for applying logging JSON messages.
 */

namespace java org.auvua.logservice
namespace py logservice

/**
 * Enumerations
 */
enum Level {
    DEBUG = 0
    INFO = 1
    WARNING = 2
    ERROR = 3
    FATAL = 4
}


/**
 * Exceptions
 */
exception FileNotFound { }


/**
 * Structures
 */


/**
 * Services
 */
service LogService {
    string getLogDirectory()
    list<string> getLogFileList()
    list<string> getLogFile(1: required string filename)// throws (1: FileNotFound err)
    bool startLogging(1: required string filename)
    bool isLogging()
    bool stopLogging()
    void log(1: required Level level, 2: required string message)
}
