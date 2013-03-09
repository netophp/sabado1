// archivos

    // Upload files to server
    function subirArchivo(ruta) {
        var ft = new FileTransfer();

        ft.upload(ruta,
            "http://igitsoft.com/pgtest.php",
            function(result) {
               crearUsuario();
			   iniciarDB();
			   /* pgAlert('Imagen subida',result.responseCode+' - '+result.bytesSent);
                console.log(result.bytesSent + ' bytes sent');¨*/
            },
            function(error) {
                console.log('Error al subir imagen'+ error.code);
            },
            { fileKey: 'archivo', fileName:'puebla.jpg' });   
    }
	
	
	