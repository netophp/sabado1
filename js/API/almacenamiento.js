// Almacenamiento
function crearUsuario(){
	window.localStorage.setItem("Usuario",$('#regNombre').val());
	window.localStorage.setItem("Id",dispositivo()['id']);
	}
	
function isLogin(){
	if (window.localStorage.getItem("Usuario"!=undefined) && window.localStorage.getItem("Id"!=undefined))
	   return true;
    else
	   return false;
	
	}
	
function accesoDB(){
	var db = window.openDatabase("hotel", "1.0", "Hotel BD", 2000000);
	return db;
	}
	
function iniciarDB(){
    accesoDB().transaction(  function (tx) {
		 tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (rId unique, fecha, habitaciones, personas, dias, tipo)');
		 tx.executeSql('CREATE TABLE IF NOT EXISTS historial (hId unique, fecha, habitaciones, personas, dias)');
	}, 	function (err) {
		pgAlert("Error en la base de datos: "+err.code);
	}, 	function () {
		pgAlert('Registro satisfactorio','se ha registrado');
	});	
	
}


function getId(){
	var regreso=0;
	accesoDB().transaction(function(tx){tx.executeSql('SELECT * FROM reservas',[],function(tx1,resultado){
		regreso = resultado.rows.length;
		//var registro1=resultado.rows.item(0).rId;
	}, function(err){
		alert(err.code);
	});
	}, function(){
	    alert('ok');	
	});rows
	return regreso+1;  

	}
	
	
function guardarReservaciones(id,fecha,habs,pers,dias,tipo){
	accesoDB().transaction(  function (tx) {
		 tx.executeSql('INSERT INTO reservas (rId, fecha, habitaciones, personas, dias, tipo) values ('+id+',"'+fecha+'","'+habs+'","'+pers+'","'+dias+'","'+tipo+'")');
		// tx.executeSql('INSERT INTO hstorial (hId, fecha, habitaciones, personas, dias, tipo) values (id,habs,pers,dias);');
	}, 	function (err) {
		pgAlert("Error al guardar los datos: "+err.code);
	}, 	function () {
		pgAlert('Registro satisfactorio','Esperando por conexión a Internet');
		//window.location.href='#page';
	});	

}