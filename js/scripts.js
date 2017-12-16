// Business (or back-end) logic;
// Array of html inputs
let groceries = [];

// User-interface (or front-end) logic;
// Form event listener
$('form#cart').submit(function(event) {
  event.preventDefault();

  // For loop to push input content into the array
  for (let i = 1; i < 6; i++) {
    if ($('input#grocery' + [i]).val() !== '') {
      groceries.push($('input#grocery' + [i]).val());
    }
  }

  // Uppercase and sort groceries by using .map and .sort
  let sortedGroceries = groceries.map(function(grocery) {
    return grocery.toUpperCase();
  });
  sortedGroceries.sort();
  console.log('sortedGroceries = ' , sortedGroceries);
});
