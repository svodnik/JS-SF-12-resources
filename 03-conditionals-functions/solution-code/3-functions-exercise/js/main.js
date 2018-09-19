
// -------------------------------------------------------------------------------
// Part 1 - Declaring and calling functions
// -------------------------------------------------------------------------------

// 1. Declare a function. Give it the name "logDate".
  // a. Inside the function, log the following value to the console:
  //    new Date()
  //    (Note: This code uses the Date object to fetch the current date and time.)

function logDate() {
  console.log(new Date());
}
// 2. Call the function

logDate();

// -------------------------------------------------------------------------------
// Part 2 - Predicting outcomes
// -------------------------------------------------------------------------------

// ---- A ------

// Look at the below function. Predict what will happen when the function is called.

function hotOrNot (temp) {
	if (temp > 75) {
		console.log("It's so hot!");
	} else {
		console.log("It's not hot.");
	}
}

hotOrNot(76);

// "It's so hot!" will be logged to the console because temp is greater than 75

// ---- B ------

// Look at the below function. Predict what will happen when the function is called.
function priceCheck (title, listPrice, taxRate) {
    let salesTax = listPrice * taxRate;
    let total = listPrice + salesTax;
    console.log(title + ' costs $' + total + '.');
}

priceCheck('Catcher in the Rye', 15, .10);

// The following will be logged to the console:
// Catcher in the Rye costs $16.5.



// -------------------------------------------------------------------------------
// Part 3 - Combining functions
// -------------------------------------------------------------------------------

// See if you can write one function that takes some parameters and combines the
// functionality of the makeAPizza and makeAVeggiePizza functions.
// BONUS: Create your own function with parameters. This function could do anything!

// function makeAPizza () {
//   let topping1 = 'pepperoni';
//   let topping2 = 'cheese';
//   let topping3 = 'mushrooms'

//   console.log('Coming right up! A pizza with ' + topping1 + ', ' + topping2 + ' and ' + topping3 + '.');
// }


// makeAPizza();



// function makeAVeggiePizza () {
//   let topping1 = 'peppers';
//   let topping2 = 'onions';
//   let topping3 = 'mushrooms'

//   console.log('Coming right up! A pizza with ' + topping1 + ', ' + topping2 + ' and ' + topping3 + '.');  
// }


// makeAVeggiePizza();

function makeAnyPizza(topping1, topping2, topping3) {
  console.log('Coming right up! A pizza with ' + topping1 + ', ' + topping2 + ' and ' + topping3 + '.');
}

makeAnyPizza('pepperoni','cheese','mushrooms');
makeAnyPizza('peppers','onions','mushrooms');