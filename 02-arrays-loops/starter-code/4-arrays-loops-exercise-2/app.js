/*
You're adding functionality to a basic website shopping cart. Starting with an 
array of prices for the items a user wants to buy, you need to calculate the
price of each item with tax, and then calculate the cart total including tax.
The cart and salesTax variables are already defined for you below.
*/

//The cart variable stores the prices for 3 products selected from an online store.
let cart = [37.49, 8.99, 27.95];

// The salesTax variable stores the local sales tax rate.
let salesTax = 0.0875;

console.log(cart);


// Complete the following:

/*
1. Create a cartWithTax variable. Write code that calculates the sales tax for
each item in the cart array, adds that to the original price of the item, and
stores the result in the cartWithTax array. 
Log the value of cartWithTax to the console once it contains all values. Be sure
to label your output in the console (remember: concatenation!)
*/



/*
2. Create a cartTotal variable. Write code that uses a loop to total the values
in the cartWithTax array, and assign the total as the value of the cartTotal
variable. 
Log the cartTotal variable to the console. Be sure to label your output in the 
console.
*/


// BONUS

// 3. Update your code in Step 1 to round each item price with tax to the
// nearest cent. (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)


// 4. Rewrite your code from Step 1 using the array.map() method. (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)