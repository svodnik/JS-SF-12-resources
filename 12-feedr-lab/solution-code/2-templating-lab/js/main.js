// Templating lab

// PART 1

// Create a template literal and use it to display the data in the 'favorite' object.
// Use the following structure for the HTML elements you create:
// div (class: recipe)
//  |_ div
//    |_ span (class: label)
//    |_ span

const favorite = {
  "name" : "Shakshuka",
  "serves" : 4,
  "meal" : "breakfast"
};

// const favoriteTemplate = `
//   <div class="recipe">
//     <div><span class="label">Name: </span>${favorite.name}</div>
//     <div><span class="label">Serves: </span>${favorite.serves}</div>
//     <div><span class="label">Meal: </span>${favorite.meal}</div>
//   </div>`;

// $(function() {
//   $('.recipes').append(favoriteTemplate);
// });

// PART 2

// Comment out your template above and create a template function
// that instead displays the contents of the 'favorites' object below.


const favorites = {
  "recipe" : [
    {
      "name" : "Shakshuka",
      "serves" : 4,
      "meal" : "breakfast"
    },
    {
      "name" : "Black Bean Chili",
      "serves" : 8,
      "meal" : "dinner"
    },
    {
      "name" : "Classic Peanut Butter Cookies",
      "serves" : "3 dozen",
      "meal" : "dessert"
    }
  ]
};

let template = function(favorite) {
  return `
    <div class="recipe">
      <div><span class="label">Name: </span>${favorite.name}</div>
      <div><span class="label">Serves: </span>${favorite.serves}</div>
      <div><span class="label">Meal: </span>${favorite.meal}</div>
    </div>`;
};

$(function() {
  favorites.recipe.forEach(function(favorite) {
    $('.recipes').append(template(favorite));
  });
});
