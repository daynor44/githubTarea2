// Cliente TCP
const net = require('net');

// variables servidor
const direccion = '127.0.0.1';
const puerto = 9000;

// Leemos por consola, y despues iniciamos el cliente
process.stdout.write('node cliente.js \n ');
process.stdout.write('Bienvenido al sistema LAB 273  \n ');
process.stdout.write('Ingrese usuario y contraseña (user/pass) \n ');
process.stdin.on('data', (data) => {
    const respuesta = data.toString().trim();
    iniciarCliente(respuesta);
});

function iniciarCliente(datoEnviar) {
    const client = new net.Socket();
    // conectamos con el servidor
    client.connect(puerto, function() {
        //const address = client.address();
        // enviamos el dato
        client.write(datoEnviar);
    });
    // recibimos dato del servidor
    client.on('data', data => {

        if(data=="dcopalupe/123456"){
          console.log('Bien venido Dan Israel Copa Lupe !!!');
        client.destroy();  
        }else{
             
        if(data=="jalanocaquino/1q2w3e4"){
          console.log('Bien venido Jorge Andres Alanoca Quino !!!');
        client.destroy();  
        }else {
          
        if(data=="acondoriquispe/54321"){
          console.log('Bien venido Ana Condori Quispe !!!');
        client.destroy();  
        } else{
            console.log('El usuario  '+data+'  es incorrecto o no existe');
            console.log('Igrese usuario y contraseña (user/pass');
        }
          }  
            }        
        
    });
     
    //cerramos la conexion con el servidor
    client.on('close', () => {
        console.log('Conexión cerrada');
       process.exit();
    });
}