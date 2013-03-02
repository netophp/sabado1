// Captura imagen
function capturaImg(){

/*
// capture callback
var captureSuccess = function(mediaFiles) {
    var ruta;
        ruta = mediaFiles[0].fullPath;
        // do something interesting with the file
		return ruta;
};*/
/*
// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

// start image capture*/


navigator.device.capture.captureImage(function(mediaFiles) {
	var ruta="";
        ruta = mediaFiles[0].fullPath;

}, function(error) {
    navigator.notification.alert('Código de error: ' + error.code);
}, {limit:1});



return ruta;
}