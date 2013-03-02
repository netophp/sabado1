// Captura imagen
function capturaImg(){


var captureSuccess = function(mediaFiles) {
    var ruta;
        ruta = mediaFiles[i].fullPath;
        
};


var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};


navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});



return ruta;
}