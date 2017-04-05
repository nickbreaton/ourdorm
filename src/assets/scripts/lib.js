function getUsers() {
  return JSON.parse($.cookie('users') || '{}');
}

function addUser(email, name, password) {
  var users = getUsers();
  users[email] = {
    name: name,
    password: password
  };
  $.cookie('users', JSON.stringify(users));
}

function getUserByEmail(email) {
  var users = getUsers();
  var user = users[email];
  return user ? {
    name: user.name,
    email: email,
    password: user.password
  } : {};
}

function getCurrentUser() {
  var email = $.cookie('currentUser');
  return getUserByEmail(email);
}

function setCurrentUser(email) {
  $.cookie('currentUser', email);
}

function clearCurrentUser() {
  $.removeCookie('currentUser');
}
