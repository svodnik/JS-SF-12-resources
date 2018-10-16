/* setTimeout(function() {
    console.log("Hello world!");
}, 2000) */

const numbers = [[1,2],[8,6],[5,9]];

// callback function to sum the contents of each sub-array
const sumArray = function(values) { // takes an array of values as a parameter
    // create an empty array to store the results in
    let result = [];
    // iterate through the array provided as a parameter
    values.forEach(function(element) {
        // add the elements of the current sub-array and push the result to the result array
        result.push(element[0] + element[1]);
    });
    // return the value of the result array
    return result;
};

// callback function to calculate the difference of the numbers in each sub-array 
const diffArray = function(values) { // takes an array of values as a parameter
    // create an empty array to store the results in
    let result = [];
    // iterate through the array provided as a parameter
    values.forEach(function(element) {
        // calculate difference between elements of current sub-array and push result to result array
        result.push(element[0] - element[1]);
    });
    // return the value of the result array
    return result;
};

// function that accepts a callback function as a parameter
const showResults = function(values, callback) { // callback can be sumArray or diffArray
  // create a new variable and store the result of calling the callback function, 
  // providing the values parameter as an argument
  const changedArray = callback(values);
  console.log("The result of " + callback.name + " is " + changedArray);
}

showResults(numbers, sumArray); 
showResults(numbers, diffArray); 
