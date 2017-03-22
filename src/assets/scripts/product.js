$('#product').ready(function () {
  var page = 0;
  var previous = page;
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
  automate();

  // list for arrow click events
  $('.arrow').click(function (event) {
    var className = event.target.className;
    var direction = (className.indexOf('right') > -1) ? 1 : -1;
    next(direction);
  });

  // determine which page to jump to
  $('.slider .bullet').mouseover(function () {
    var node = this;
    var index = -1;
    $('.slider .bullet').each(function (i, bullet) {
      if (node === bullet) index = i;
    });
    // do nothing if already at page
    if (index === page) return;
    // otherwise, jump to that page
    to(index);
  });

  // change slide after 10 seconds
  function automate() {
    timeout = setTimeout(function () {
      next(1);
    }, 10000);
  }

  function next(direction) {
    // update current page index
    page += direction;
    // update DOM
    update(direction);
  }

  function to(number) {
    // set page to specified number
    page = number;
    // update DOM
    update(1);
  }

  function update(direction) {
    // do not update if already updating
    if ($('.browser').is(':animated')) {
      page = previous;
      return;
    }
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
      automate();
    }
    // save current page as previous for next change
    previous = page;
  }
});
