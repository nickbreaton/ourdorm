---
---

$('form').submit(function (event) {
  // prevent GET request
  event.preventDefault();
  // provide alert to user
  alert(event.target.alert.value);
  // clear all form fields
  event.target.reset();
});

// PRODUCT

var page = 0;
var total = $('.browser').length;
var timeout;

// start on current page
$('.browser').css('left', '-150%');
$('.browser').eq(page).css('left', '0');

// create bullets
for (var i = 0; i < total; i++) {
  $('.slider').append('<div class="bullet"></div>');
}

// activate current bullet
$('.slider .bullet').eq(page).addClass('active');

// start slider change timeout
automateSlider();

// list for arrow click events
$('.arrow').click(function (event) {
  var className = event.target.className;
  var direction = (className.indexOf('right') > -1) ? 1 : -1;
  updateSlider(direction);
});

function updateSlider(direction) {
  // do not update if already updating
  if ($('.browser').is(':animated')) return;
  // save previous index
  var previous = page;
  // update current page index
  page += direction;
  // contain index in bounds
  page = (page > total - 1) ? 0 : page;
  page = (page < 0) ? total - 1 : page;
  // change class on bullet
  $('.slider .bullet').each(function (i, bullet) {
    var action = (page === i) ? 'addClass' : 'removeClass';
    $(bullet)[action]('active');
  });
  // animate browser frames
  $('.browser').eq(page).css('left', direction * -1 * 150 + '%');
  $('.browser').eq(page).animate({ left: '0' }, 500);
  $('.browser').eq(previous).animate({ left: direction * 150 + '%' }, 500);
  // clear previous timeout, set new timeout
  if (timeout) {
    clearTimeout(timeout);
    automateSlider();
  }
}

function automateSlider() {
  timeout = setTimeout(function () {
    updateSlider(1);
  }, 10000);
}
