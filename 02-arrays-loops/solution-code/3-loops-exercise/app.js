/*
Write code that creates a for loop that calculates 2 to the 10th power step by
step, and console.logs each step of the calculation. The for loop should 
console.log the result of 2^1, then the result of 2^2, etc., until it gets to 2^10.

Start by creating a variable to store the exponent, which is 10.

Then create a for loop to calculate each step of this process and log it to the console.

BONUS 1: Rewrite your code to allow a user to enter the exponent value, rather than hard-coding it into your program. (Hint: Read up on the window.prompt method at https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt.)

BONUS 2: Rewrite your code to use a while loop rather than a for loop. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

BONUS 3: Rewrite your code to use a do/while loop rather than a for loop or while loop. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
*/

let exponent = 10;

// Using window.prompt
// let exponent = window.prompt("Please enter a number");

console.log("Calculating 2 to the power of " + exponent + ":");


for (let i = 1; i <= exponent; i++) {
    console.log("2 ^ " + i + " = " + Math.pow(2,i));
}


/*
// Using while statement
let i = 1;
while (i <= exponent) {
    console.log("2 ^ " + i + " = " + Math.pow(2,i));
    i++;
}
*/

/* 
// Using do/while statement
let i = 1;
do {
    console.log("2 ^ " + i + " = " + Math.pow(2,i));
    i++;
} while (i <= exponent);
 */