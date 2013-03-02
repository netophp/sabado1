// Captura imagen
function capturaImg(){


// capture callback
var captureSuccess = function(mediaFiles) {
    var ruta;
        path = mediaFiles[0].fullPath;
        // do something interesting with the file
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

// start image capture
navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});



return captureSuccess;
}