var App = {
    apiRoute: 'https://king-of-the-hillapi-wzlcgmsygx.now.sh',
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

(function () {
    var timeout;
    var previousMessage;

    function initTimeout() {
        clearTimeout(timeout);

        timeout = setTimeout(function () {
            App.requestTop().then(function (data) {
                var message = JSON.stringify(data);

                if (previousMessage !== message) {
                    postMessage(message);
                    previousMessage = message;
                }

                initTimeout();
            });
        }, 100);
    }

    initTimeout();
})();