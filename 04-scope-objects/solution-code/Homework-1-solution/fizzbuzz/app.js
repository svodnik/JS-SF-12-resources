//Step 1:

//Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100:

"use strict";

/* 
for (let num = 1; num <= 100; num++) {
  console.log(num);
}
*/

//Step 2:

//Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value:

/*
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(num)
  }
}
*/

//##### Step 3:

//Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`:

/*
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(num)
  }
}
*/

//##### Step 4:

//Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`. (Note that the num % 15 clause must come befor the conditions checking for divisibility by 3 and 5; otherwise, the condition where a number is divisible by both 3 and 5 is never checked!)

for (let num = 1; num <= 100; num++) {
  if (num % 15 === 0) {
    console.log('fizzbuzz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 3 === 0) {
    console.log('fizz')
  } else {
    console.log(num)
  }
}
