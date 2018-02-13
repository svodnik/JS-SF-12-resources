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

/**
 * Question 5
 * Create a variable called numbers containing an array of numbers using 1, 2, 3, 
 * and 4 as values.
 * Create a variable called q5. Set its value to the result of running the 
 * map method on the numbers array, increasing each value by 1.
 * The end result should be a second array stored in the q5 variable with
 * the values 2, 3, 4, and 5.
 */

// Your code here

let numbers = [1,2,3,4];
let q5 = numbers.map(function(element) {
	return element + 1;
});
console.log("Question 5: " + q5);

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 6
 * Create a variable called q6. Set its value to the average of the numbers in
 * the numbers array from Question 5.
 * (average = sum of all numbers/number of numbers). 
 * Hint: Think about how you can take advantage of a loop to accomplish this.
 */
let q6 = 0;
q5.forEach(function(element){
	q6 += element;
});
q6 = q6 / q5.length;
console.log("Question 6: " + q6);


/**
 * BONUS:
 * Question 7
 * Create an variable called q7 containing an array of numbers using 1, 2, 3, 
 * and 4 as values.
 * Use a forEach function to increase each value by 1, updating the values
 * in the original array. This should result in the original array you created
 * storing the values 2, 3, 4, and 5.
 * (Hint: Look up the index)
 */

// Your code here

// forEach function
let q7 = [1,2,3,4];
q7.forEach(function(element, index){
	q7[index] = element + 1;
});
console.log("Question 7: " + q7);

// or written as a for loop
// let q7 = [1,2,3,4];
// for (let i = 0; i < q7.length; i++) {
// 	 q7[i]++;
// }
// console.log("Question 7: " + q7);
