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
  this.msTime = null;
  this.message = null;
  if (args) {
    if (args.level !== undefined && args.level !== null) {
      this.level = args.level;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field level is unset!');
    }
    if (args.msTime !== undefined && args.msTime !== null) {
      this.msTime = args.msTime;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field msTime is unset!');
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
      if (ftype == Thrift.Type.I32) {
        this.msTime = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
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
  if (this.msTime !== null && this.msTime !== undefined) {
    output.writeFieldBegin('msTime', Thrift.Type.I32, 2);
    output.writeI32(this.msTime);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 3);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LogService_log_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
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

LogService_log_result.prototype.write = function(output) {
  output.writeStructBegin('LogService_log_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
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
LogServiceClient.prototype.log = function(level, msTime, message, callback) {
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
    this.send_log(level, msTime, message);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_log(level, msTime, message);
  }
};

LogServiceClient.prototype.send_log = function(level, msTime, message) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('log', Thrift.MessageType.CALL, this.seqid());
  var args = new LogService_log_args();
  args.level = level;
  args.msTime = msTime;
  args.message = message;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

LogServiceClient.prototype.recv_log = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new LogService_log_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('log failed: unknown result');
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
  if (this._handler.log.length === 3) {
    Q.fcall(this._handler.log, args.level, args.msTime, args.message)
      .then(function(result) {
        var result = new LogService_log_result({success: result});
        output.writeMessageBegin("log", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("log", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.log(args.level, args.msTime, args.message, function (err, result) {
      if (err == null) {
        var result = new LogService_log_result((err != null ? err : {success: result}));
        output.writeMessageBegin("log", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("log", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}
