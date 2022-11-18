const app = express()

app.use(cors())

import cors from 'cors'
import express from 'express'
import mysql from 'mysql2'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const port = 3000

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'login_js'
});

// LOGIN
app.post('/login', function (req, res) {
  const username = req.body.username
  const password = req.body.password
  
  const sql = `SELECT * FROM usuarios WHERE usuario = '${username}' AND password = '${password}'`

  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    if (results.length > 0) {

      res.send({status: 'ok'})
      console.log(username + ' Inicia sesión correctamente')
        
    } else {
    
      res.send({status: 'error'})
      console.log('Usuario o contraseña incorrectos')
    
    }
  });
})

//Registro
app.post('/register', function (req, res) {
  
  const id = req.body.id
  const nombre = req.body.nombre
  const apellido = req.body.apellido
  const direccion = req.body.direccion
  const telefono = req.body.telefono
  const nacimiento = req.body.nacimiento
  const genero = req.body.genero
  const usuario = req.body.usuario
  const password = req.body.password

  const sql = `SELECT * FROM usuarios WHERE usuario = '${usuario}' OR identificacion = '${id}'`
  
  connection.query(sql, function (error, results, fields) {
    if(error) throw error;    
    if (results.length > 0) {

      res.send({status: 'error'})
      console.log('Ya existe un usuario con ese nombre o identificación')
      
    } else {

      const sql2 = `INSERT INTO usuarios (identificacion, nombre, apellido, direccion, telefono, nacimiento, genero, usuario, password) VALUES ('${id}','${nombre}','${apellido}','${direccion}','${telefono}','${nacimiento}','${genero}','${usuario}','${password}')`;
      
      connection.query(sql2, function (error, results, fields) {
        if(error) throw error;
        res.send({status: 'ok'})
        console.log('Usuario registrado correctamente')
        console.log(results)
      });  
    }
  });
});
    

app.listen(port, function () {
  console.log('Servidor activo desde puerto: ' + port)

})