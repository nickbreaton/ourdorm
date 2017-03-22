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

var page = 0;

$('.arrow').click(function (event) {
  var className = event.target.className;
  var direction = (className.indexOf('right') > -1) ? 1 : -1;
  updateSlider(direction);
});

function updateSlider(direction) {
  // update current page index
  page += direction;
  // contain index in bounds
  page = (page > 2) ? 0 : page;
  page = (page < 0) ? 2 : page;
  // change class on bullet
  $('.slider .bullet').each(function (i, bullet) {
    var action = (page === i) ? 'addClass' : 'removeClass';
    $(bullet)[action]('active');
  });
  // tmp
  $('.browser').toggleClass('active');
}
