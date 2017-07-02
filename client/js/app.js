var API_PORT = 3000;
var App = {
  apiRoute: 'https://king-of-the-hillapi-wzlcgmsygx.now.sh',
  submitTop: function (data) {
      var self = this;

      return new Promise(function (resolve) {
          var xhttp = new XMLHttpRequest();

          xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  resolve(JSON.parse(this.responseText));
              }
          };
          xhttp.open('POST', self.apiRoute+'/top', true);
          xhttp.setRequestHeader("Content-Type", "application/json");
          xhttp.send(JSON.stringify({item: data}));
      });
  },
  requestTop: function () {
      var self = this;

      return new Promise(function (resolve) {
          var xhttp = new XMLHttpRequest();

          xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  resolve(JSON.parse(this.responseText));
              }
          };
          xhttp.open('GET', self.apiRoute+'/top', true);
          xhttp.setRequestHeader("Content-Type", "application/json");
          xhttp.send();
      });
  }
};