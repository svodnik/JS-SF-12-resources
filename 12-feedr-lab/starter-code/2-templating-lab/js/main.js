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