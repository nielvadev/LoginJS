function iniciarSesion(){

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  
  alert(username + password);

  fetch('http://localhost:3000/login', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
}