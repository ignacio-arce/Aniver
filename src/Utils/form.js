const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  var message = document.getElementById('message');
  var email = document.getElementById('email');
  var text = document.getElementById('text');
  var data = {
    message,
    email,
    text,
  };
  var request = new XMLHttpRequest();
  request.open('POST', '/mail', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(data);
});
