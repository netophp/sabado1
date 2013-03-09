// JavaScript Document
// Eventos
$(document).ready(function(e) {
	document.addEventListener("deviceready",function () { // escuchar el evento click
	
	
	 if (!isLogin()) // Verifica si ya acceso a login
  		window.location.href = "#login";
  //$('#login').  //Se manda a llamar al div login
  $("#regFoto").tap(function(){
	//pgAlert('Captura imagen',capturaImg()); 
	
	capturaImg();   
  });
  
  //Funcionalidad Login
  $('#regSubmit').tap(function () {   //seleccionando el boton submit, tap es solo para touch
	      if ($('#regName').val()!='' && $('#regLugar').val()!='' && $('#regMail').val()!='' && $('#regTel').val()!='') 
		  {
			  var name=$('#regName').val();   //Pasando el valor de variables
			  var lug=$('#regLugar').val();
			  var email=$('#regMail').val();
			  var tel=$('#regTel').val();
			  
			 // pgAlert('Valores Nombre: ',name+' \n Lugar: '+lug+'\n Correo electrónico: '+email+' \nTeléfono: '+tel);
			  logSend(name,lug,email,tel);
		//reservar();
			  } else{
				  pgAlert("Error",'Todos los campos son requeridos');
				  }
	  });
	
	     //otros eventos de phonegaph
		 /*
		 document.addEventListener("pause",function() {},false); //pausar la aplicación
		 document.addEventListener("resume",function() {},false); //continuar con la aplicación
		 document.addEventListener("online",function() {},false); //capturar el evento en linea
		 document.addEventListener("offline",function() {},false); //capturar eveto cuando se desconecta
		 */
		 
		reservar();
		},false); //captura eventos en javascript, se puede crear la función en lugar de isLogin
	
	
  //$('div').remove();  //metodo  objeto.metodo
  //alert('Bienvenido al Curso');
 
  
  
});


function reservar() {
	//Seleccionar tipo de habitación
	//alert('hola neto !!!');
	  $('#nr1 ul[data-role=listview] a').click(function () {
		  $('#nr1').attr('tipo',$(this).parents('li').index());
	      window.location.href='#nr2';
	});
	$('#nr2 #enviar').tap(function () {
		
		 var f = new Date();
         var fecha=df.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
	     var habs = $('#nr2 ul[data-role=listview] li:eq(1)').children('select').val();
		 var pers = $('#nr2 ul[data-role=listview] li:eq(2)').children('select').val();	
		 var dias = $('#nr2 ul[data-role=listview] li:eq(3)').children('select').val();
		 var tipo = $('#nr1').attr('tipo');
		 
		 // Comprobar que este en linea
		 if (!isConnected()){
			 //Guardar localmente
			var id1=getId();
			 guardarReservaciones(id1,fecha,habs,pers,dias,tipo);
			// alert(id1);
			 }
			 else{
		     //Sincronizar en el Servidor
			 
				 }
	});
}


