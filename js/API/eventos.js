// JavaScript Document
// Eventos
$(document).ready(function(e) {
	document.addEventListener("deviceready",function () { // escuchar el evento click
	
	
	 if (!isLogin()) // Verifica si ya acceso a login
  		window.location.href = "#login";
  //$('#login').  //Se manda a llamar al div login
  
  
  //Funcionalidad Login
  $('#regSubmit').tap(function () {   //seleccionando el boton submit, tap es solo para touch
	      if ($('#regName').val()!='' && $('#regLugar').val()!='' && $('#regMail').val()!='' && $('#regTel').val()!='') 
		  {
			  var name=$('#regName').val();   //Pasando el valor de variables
			  var lug=$('#regLugar').val();
			  var email=$('#regMail').val();
			  var tel=$('#regTel').val();
			  
			  bgAlert('Valores Nombre: ',name+' \n Lugar: '+lug+'\n Correo electrónico: '+email+' \nTeléfono: '+tel);
			  } else{
				  bgAlert("Error",'Todos los campos son requeridos');
				  }
	  });
	
	     //otros eventos de phonegaph
		 /*
		 document.addEventListener("pause",function() {},false); //pausar la aplicación
		 document.addEventListener("resume",function() {},false); //continuar con la aplicación
		 document.addEventListener("online",function() {},false); //capturar el evento en linea
		 document.addEventListener("offline",function() {},false); //capturar eveto cuando se desconecta
		 */
		 
		
		},false); //captura eventos en javascript, se puede crear la función en lugar de isLogin
	
	
  //$('div').remove();  //metodo  objeto.metodo
  //alert('Bienvenido al Curso');
 
  
  
});


function isLogin(){
	
	return false;
	
	}



