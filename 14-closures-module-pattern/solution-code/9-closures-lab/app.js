/* Closures lab
 *
 * 1. Create a function called createTaxCalculator that takes a single
 *    parameter, rate, which is the sales tax rate for a certain location.
 *    Within the function, add the following:
 *    a) a variable called taxRate that stores a reference to the rate parameter
 *    b) a nested function called calcTax that does the following:
 *       - takes a single parameter, value
 *       - creates a variable called tax that stores the result of multiplying
 *         the value parameter by the taxRate variable from the parent scope
 *       - creates a variable called total that stores the result of adding
 *         value and tax
 *       - logs to the console the string 'Tax: $' followed by the value of tax
 *         to 2 decimal places. (Hint: remember the toFixed() method!)
 *       - logs to the console the string 'Total: $' followed by the value of
 *         total to 2 decimal places.
 *    c) a statement that returns the calcTax function
 * 
 * 2. Create a variable called calcSFTax that calls the createTaxCalculator
 *    function with the value 0.085 as its argument.
 * 
 * 3. Create a variable called calcOaklandTax that calls the createTaxCalculator
 *    function with the value 0.0925 as its argument.
 * 
 * 4. Write statements that run the functions you created in steps 2 & 3, 
 *    passing in 100 as the value, then check your code in the console and 
 *    verify that the tax values returned are $8.50 and $9.25.
 */ 

function createTaxCalculator(rate) {
  const taxRate = rate;
  function calcTax(value) {
    let tax = value * taxRate;
    let total = value + tax;
    console.log('Tax: $' + tax.toFixed(2));
    console.log('Total: $' + total.toFixed(2));
  }
  return calcTax;
}
const calcSFTax = createTaxCalculator(0.085);
calcSFTax(100); 
const calcOaklandTax = createTaxCalculator(0.0925);
calcOaklandTax(100);