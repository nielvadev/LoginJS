const app = express()

import mysql from 'mysql'
import express from 'express'
import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000

app.post('/login', function (req, res) {
  const username = req.body.username
  const password = req.body.password
  console.log(username, password)
  res.send(username + password)
})

app.listen(port, function () {
  console.log('Servidor activo desde puerto: ' + port)
})











// import { createConnection } from 'mysql';

// var connection = createConnection({
//     host     : 'localhost',
//     database : 'login_js',
//     user     : 'root',
//     password : '',
//     port: 3000
// });

// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();