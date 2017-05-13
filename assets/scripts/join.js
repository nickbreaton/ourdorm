$('#join').submit(function (event) {
  // prevent GET request
  event.preventDefault();
  // check if password was correctly entered
  if (event.target.password.value !== event.target.confirm.value) {
    alert('Error: \n\nThe passwords do not match!')
    return;
  }
  // add the new user
  addUser(
    event.target.email.value,
    event.target.name.value,
    event.target.password.value
  );
  // log user in
  setCurrentUser(event.target.email.value);
  // alert user
  alert('Your account has been created!');
  // redirect to login page
  document.location = 'login.html';
});
