// Working with nested data structures
//
// The cakes variable below contains a JavaScript object:

'use strict';

const cakes = {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},
	"topping":
		[
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		]
};

// PART A
// 1. Write a statement that logs the value of the `batters` property to the
//    console


// 2. Write a statement that logs the `batter` array to the console


// 3. Write a statement that logs the second element in the `batter` array to
//    the console.


// 4. Write a statement that logs the `type` property of the second element in
//    `batter` array to the console.



// PART B
// 1. Write a statement that logs the id value of the fifth element in the
//    `topping` array to the console.
//    Hint: Remember to start at the top of the structure and use dot syntax or
//    square bracket notation to move down one level at a time.



// BONUS
// 1. Write code that logs the values of all the properties in the cakes object.
//    Hint: Read up on the for/in iterator.
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in



// 2. Write code that logs the _key names_ of all the properties in the cakes
//    object.
//    Hint: Read up on the for/in iterator (again).
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in


