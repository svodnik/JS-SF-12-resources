/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create a variable called q1. As its value, create an array of image source
 * filenames. Use "image1.png", "image2.png", and "image3.png" as the array 
 * values.
 */
let q1 = ['image1.png', 'image2.png', 'image3.png'];
console.log("Question 1: " + q1);

/**
 * Question 2
 * Create a variable called q2, and set its value to the value of the first
 * array element from Question 1.
 */
let q2 = q1[0]
console.log("Question 2: " + q2);

/**
 * Question 3
 * Create a variable called q3 and store the length of the q1 array (number
 * of elements in the array) in your new variable.
 */
let q3 = q1.length
console.log("Question 3: " + q3);

/**
 * Question 4
 * Create a variable called q4, and store the last element of the q1 array
 * in your new variable. 
 * Hint: How can we identify the index number of the last element in the array?
 */
let q4 = q1[q1.length-1];
console.log("Question 4: " + q4);

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create a variable called numbers2 containing an array of numbers using 5, 17, 37, and 63 as values.
 * Create a variable called numbers2total. Set its value to the total of the values in the numbers2 array.
 * Hint: Think about how you can take advantage of a loop to accomplish this.
 * Create a variable called q5. Set its value to the average of the values in the numbers2 array.
 * (average = sum of all numbers/number of numbers). 
 */
let numbers2 = [5, 17, 37, 63];
let numbers2total = 0;
numbers2.forEach(function(element){
	numbers2total += element;
});
let q5 = numbers2total / numbers2.length;
console.log("Question 5: " + q5);


/**
 * Question 6
 * Create an variable called q6.
 * Use a forEach function to increase each value in the numbers2 array by 1, then store the result as an array element in the q6 variable. This should result in the q6 variable
 * storing the values 6, 18, 38, and 64.
 * (Hint: Look up the index)
 */

// Your code here

// forEach function
let q6 = [];
numbers2.forEach(function(element){
	q6.push(element + 1);
});
console.log("Question 6: " + q6);

// or written as a for loop
// let q6 = [];
// for (let i = 0; i < numbers2.length; i++) {
// 	 q6.push(numbers2[i]++);
// }
// console.log("Question 6: " + q6);


/**
*** BONUS ***

* Question 7
 * Create a variable called q7. Perform the same task that you did in Question 6, but this time, use the map() method. (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 * Store your result in the q7 variable.
 */

// Your code here

let q7 = numbers2.map(function(element) {
	return element + 1;
});
console.log("Question 7: " + q7);
