$('#login').submit(function (event) {
  // prevent GET request
  event.preventDefault();
  // fetch potential user
  var possibleUser = getUserByEmail(event.target.email.value);
  // attempt login
  if (possibleUser.password !== event.target.password.value) {
    alert('Error: \n\nEmail or password is incorrect!');
    return;
  }
  // log user in if valid
  setCurrentUser(event.target.email.value);
  // change the page to display profile information
  updateLoginPage();
  // clear all form fields
  event.target.reset();
});

$('#logout').submit(function (event) {
  event.preventDefault();
  clearCurrentUser();
  updateLoginPage();
});

var $form = $('#login');
var $user = $('#user');
var $name = $('#user-name');
var $image = $('#user-image');
var defaultEmail = $image.attr('src');

// wipe default image
$image.attr('src', '');

function updateLoginPage() {
  var user = getCurrentUser();

  // set name as profile name
  $name.text(user.name);

  // set profile picture using Gravatar
  $image.attr('src',
    'https://www.gravatar.com/avatar/' + md5(user.email)
    + '?default=' + encodeURI(defaultEmail)
    + '&size=250'
  );

  // show or hide login menu
  if (user.email) {
    $form.addClass('hidden');
    $user.removeClass('hidden');
  } else {
    $form.removeClass('hidden');
    $user.addClass('hidden');
  }
}

updateLoginPage();
