// JavaScript Document
// Eventos
$(document).ready(function(e) {
  //$('div').remove();  //metodo  objeto.metodo
  //alert('Bienvenido al Curso');
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
			  
			  alert('Nombre: '+name+' \n Lugar: '+lug+'\n Correo electrónico: '+email+' \nTeléfono: '+tel);
			  } else{
				  alert('Todos los campos son requeridos');
				  }
	  });
  
  
});


function isLogin(){
	
	return false;
	
	}



