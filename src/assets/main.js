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
