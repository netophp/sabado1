// Conexión al Servidor
function logSend(nombre,lugar,mail,tel){
	$.ajax({
	  type: "POST",
	  url: "http://187.157.167.134/neto/pgtest.php",
	  data: 'nom='+nombre+'&lug='+lugar+'&mail='+mail+'&tel='+tel+"&uuid="+dispositivo()['id']+"&ruta="+capturaImg()
	}).done(function( msg ) {
	  if (msg=='0'){
		  pgAlert('Error','Hubo un error al enviar datos');
	  }
	  else
	  {
		  subirArchivo($('#regFoto').attr('ruta'));
		 // pgAlert('Registrado','Se ha registrado satisfactoriamente');
		  //Gurardar base de datos local
		  }
	});
}