---
---

// fetch elements from document
var join = document.querySelector('#join');
var login = document.querySelector('#login');

// handle join submit if available
if (join) {
  join.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Weclome! Your account has been created.');
    clearFields(event);
  });
}

// handle join submit if available
if (login) {
  login.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Successfully logged in.');
    clearFields(event);
  });
}

function clearFields(event) {
  // gather all inputs of form
  var inputs = new Array(...event.target.querySelectorAll('input'));

  // filter out all submit buttons
  inputs = inputs.filter(function (input) {
    return input.type !== 'submit';
  });

  // clear all inputs
  inputs.forEach(function (input) {
    if (input.value) input.value = null;
    if (input.checked) input.checked = false;
  });
}
