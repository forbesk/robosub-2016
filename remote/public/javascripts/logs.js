var logserv = {
  transport: {},
  protocol: {},
  client: {},
  connect: function(address) {
    this.transport = new Thrift.Transport(address);
    this.protocol = new Thrift.TJSONProtocol(this.transport);
    this.client = new LogServiceClient(this.protocol);
    this.updateStatus();
  },

  connected: function() {
    var connected = false;

    if (this.client) {
      try {
        this.client.isLogging();
        connected = true;
      } catch (e) {
      console.log("Failed to connect: " + e);
      }
    }

    return connected;
  },

  updateStatus: function() {
    var logservstatus = document.getElementById('logservstatus');

    if (this.connected()) {
      logservstatus.innerHTML = 'Running';
      logservstatus.setAttribute('class', 'label label-success');
    } else {
      logservstatus.innerHTML = 'Stopped';
      logservstatus.setAttribute('class', 'label label-danger');
    }
  },

  updateLogFileList: function() {
    var loglist = document.getElementById('loglist');
    loglist.innerHTML = '';
    if (this.connected()) {
      var files = this.client.getLogFileList();
      files.forEach(function(file) {
        var option = document.createElement('option');
        option.innerHTML = file;
        loglist.appendChild(option);
      });
    }
  },

  getLogFile: function() {
    if (this.connected()) {
      var logcontents = document.getElementById('logcontents');
      var loglist = document.getElementById('loglist');
      logcontents.innerHTML = this.client.getLogFile(loglist.selectedOptions[0].innerHTML).join('</br>');
    }
  },

  refresh: function() {
    this.updateStatus();
    this.updateLogFileList();
  }
}

logserv.connect("http://localhost:3001/logserv");
setInterval(function() {
  logserv.refresh();
}, 2000);
