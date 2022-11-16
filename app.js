import { createConnection } from 'mysql';

var connection = createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : ''
});

connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();

    // let id = document.getElementById('id').value
    // let nombre = document.getElementById('nombre').value;
    // let apellido = document.getElementById('apellido').value;
    // let direccion = document.getElementById('direccion').value;
    // let telefono = document.getElementById('telefono').value;
    // let fecha = document.getElementById('nacimiento').value;
    // let genero = document.getElementById('genero').value;
    // let usuario = document.getElementById('usuario').value;
    // let password = document.getElementById('password').value;

    // let sql = "INSERT INTO usuario (id, nombre, apellido, direccion, telefono, fecha_nac, genero, usuario, password) VALUES (id, nombre, apellido, direccion, telefono, fecha, genero, usuario, password)";
    
    // connection.query(sql , function (err, result) { 
    //     if (err) throw err;
    //     console.log("Usuario registrado correctamente");
    // });

    // connection.end();

    // alert(nombre + " Usuario registrado correctamente");
    