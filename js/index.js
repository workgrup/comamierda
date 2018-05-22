var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        listcontacts();
    }
};

function listcontacts() {
var options = new ContactFindOptions(), name, phoneNumber;
options.filter = "";
options.multiple = true;

var fields = ["name", "phoneNumbers"];

function onSuccess(contacts) {
var res = "";
for(var index = 0, len = contacts.length; index < len; index++) { name = contacts[index].name; name = name != null ? name.formatted : ""; phoneNumber = contacts[index].phoneNumbers; phoneNumber = phoneNumber != null && phoneNumber.length > 0 ? phoneNumber[0].value : "";

res += name + "   : " + phoneNumber + "n";
}
$$('textField2').setValue(res);

navView.goToView(3);
}

function onError() {
alert('onError!');
}

navigator.contacts.find(fields, onSuccess, onError, options);