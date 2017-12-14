// Business (or back-end) logic;
// Array of html inputs
let groceries = [];

// User-interface (or front-end) logic;
// Form event listener
$('form#cart').submit(function(event) {
  event.preventDefault();
  alert('form submitted');
});
