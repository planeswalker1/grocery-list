// Business (or back-end) logic;
// Array of html inputs
let groceries = [];

// Function to create a list item, add content, and append it to the DOM
function createLi(content) {
  let li = $('<li></li>');
  li.text(content);
  $('div.grocery-list ul').append(li);
}

// User-interface (or front-end) logic;
// Form event listener
$('form#cart').submit(function(event) {
  event.preventDefault();
  // Empty groceries array and div.grocery-list ul if the form has already been submitted;
  if (groceries.length !== 0) {
    groceries.length = 0;
    $('div.grocery-list ul').empty();
  }

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
  // console.log('sortedGroceries = ' , sortedGroceries);

  // For loop to append sortedGroceries array content into div.grocery-list ul
  for (let i = 0; i < sortedGroceries.length; i++) {
    createLi(sortedGroceries[i]);
  }

  //Empty sortedGroceries array after appending it to the DOM
  if (sortedGroceries.length !== 0) {
    sortedGroceries.length = 0;
  }
  // Show div.grocery-list
  $('div.grocery-list').slideDown();
  // console.log('groceries = ', groceries);
  // console.log('sortedGroceries = ', sortedGroceries);
});
