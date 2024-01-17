document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // You can implement the actual login logic here, for example by making an API call to the Netflix server.
  console.log('Email: ' + email);
  console.log('Password: ' + password);
});