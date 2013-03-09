// Captura imagen
function capturaImg(){


navigator.device.capture.captureImage(function(mediaFiles) {

		pgAlert('Captura de imagen','Foto tomada satisfactoriamente');
		$('#regFoto').attr('rel',mediaFiles[0].fullPath).css('background-color','#0F0');
		$('#login div[data-role=content] #regSubmit').prepend('<img src="'+mediaFiles[0].fullPath+'" style="width:100%" />');

}, function(err) {
   pgAlert('Error code: ' + err.code);
}, {limit:1});

//return captureSuccess;
}