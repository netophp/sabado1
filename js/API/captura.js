// Captura imagen
function capturaImg(){

/*
// capture callback
var captureSuccess = function(mediaFiles) {
    var ruta;
        ruta = mediaFiles[0].fullPath;
        // do something interesting with the file
		pgAlert('Captura de imagen','Foto tomada satisfactoriamente');
		$('#regFoto').attr('rel',ruta).css('background-color','#0F0');
		$('#login div[data-role=content] #regSubmit').prepend('<img src="'+ruta+'" style="width:100%" />');
		return ruta;
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

// start image capture
navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});
*/



// start image capture
navigator.device.capture.captureImage(function(mediaFiles) {

		pgAlert('Captura de imagen','Foto tomada satisfactoriamente');
		$('#regFoto').attr('rel',mediaFiles[0].fullPath).css('background-color','#0F0');
		$('#login div[data-role=content] #regSubmit').prepend('<img src="'+mediaFiles[0].fullPath+'" style="width:100%" />');

}, function(err) {
   pgAlert('Error code: ' + err.code);
}, {limit:1});

//return captureSuccess;
}