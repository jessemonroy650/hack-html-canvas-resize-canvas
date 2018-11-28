//
//    Cordova is ready
//
//  NOTE: The initialTimeOut is to wait for the GPS to get a decent reading.
//  NOTE: This need to be in the same scope as the EventListener. 
//      It canNOT go in a seperate file.
var dummyLoader = function() {
		Location.getLocation();
};
//
var app = {
    version : '0.8.0',
    targetEvent    : 'click',
    isCordovaApp   : 'false',

    //
    //  Initialize our screen, and all libraries we used.
    //
    init : function () {
        $('#version').text(app.version);
        FastClick.attach(document.body);
    },
    //
    //  "hook" deals with the interactive screen, buttons and the such.
    //   
    hook : function () {
        //  https://developer.mozilla.org/en-US/docs/Web/API/Storage
		$('#app_icon').click(function(){
		});
		//
		$('#menubar').click(function(){
		});
    },
    //
    onDOMContentLoaded : function () {
        app.init();
        app.hook();

        setTimeout(function () {
            var ratio        = 0.0625;
            var imgQ         = 0.7;
            var ws_width     = window.screen.width - 10;
            var base64Image  = resizeBase64.image("originalImage",
                                                 "canvasImage",
                                                 {'width': ws_width},
                                                 imgQ);
            if (base64Image) {
                $('#status').html("length: " + base64Image.img.length + "<br>" +
                                  "width: " + base64Image.width + "/ height: " + base64Image.height + "<br>" +
                                  "ratio: " + base64Image.ratio + "/ Q: " + base64Image.Q);
            } else {
                $('#status').text("base64String is empty");
            }
        }, 250);
    },
    //
    onDeviceReady : function () {
        console.log("app.onDeviceReady()");
		//window.setTimeout(dummyLoader, initialTimeOut);
		$('#status').text("Device Ready.");
        // - https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
        app.isCordovaApp = (typeof window.cordova !== "undefined");
        if (app.isCordovaApp) {
        }
    }

};
