const button = document.querySelector('button');

button.addEventListener('click', () => {

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const newLogin = {
    username: 'UsuarioX',
    password: '12345'
  }


  fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify(newLogin),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(data => console.log(data))
})
