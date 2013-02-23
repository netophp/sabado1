// Conexión al Servidor
function logSend(nombre,lugar,mail,tel){
	$.ajax({
	  type: "POST",
	  url: "http://www.igitsoft.com/phtest.php",
	  data: 'nom='+nombre+'&lug='+lugar+'&mail='+mail+'&tel='+tel 
	}).done(function( msg ) {
	  if (msg=='0'){
		  pgAlert('Error','Hubo un error al enviar datos');
	  }
	  else
	  {
		  pgAlert('Registrado','Se ha registrado satisfactoriamente');
		  //Gurardar base de datos local
		  }
	});
}