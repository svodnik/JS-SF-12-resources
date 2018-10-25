// Prototypes Lab
//
// 1. Create an Item constructor that assigns a single method, logItem, that 
//    logs the current object.
// 2. Create a Clothing constructor that accepts 7 parameters: stockNumber, 
//    name, size, gender, type, color, and price. The Clothing constructor
//    should assign each of these parameters to a property with the same name.
//    It should also assign a 'division' property with a value of 'clothing'.
// 3. Specify the Item constructor as the prototype of the Clothing constructor.
// 4. Create a Household constructor that accepts 5 parameters: stockNumber,
//    name, department, type, and price. The Household constructor should 
//    assign each of these parameters to a property with the same name. It
//    should also assign a 'division' property with a value of
//    'household goods'.
// 5. Specify the Item constructor as the prototype of the Household constructor.
// 6. Save your work, open index.html in the browser, and verify that the
//    objects are logged to the console and list all of the properties specified
//    in the statements below.

// BONUS 1: Update your logItem function to log each key and its value to the
//   console individually, using a for/in loop and template literals.
// BONUS 2: DRY out your code further by moving the custom properties common to 
//   both the Clothing and Household functions into the Item function. Start by
//   reading up on the call() method at 
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call. 

'use strict';

function Item() {
  this.logItem = function() {
    console.log(this);
    // BONUS 1:
    // for (let key in this) {
    //   console.log(`${key}: ${this[key]}`);
    // }
  };
}

function Clothing(stockNumber, name, size, gender, type, color, price) {
  this.stockNumber = stockNumber;
  this.name = name;
  this.division = 'clothing';
  this.size = size;
  this.gender = gender;
  this.type = type;
  this.color = color;
  this.price = price;
}

Clothing.prototype = new Item();

function Household(stockNumber, name, department, type, price) {
  Item.call(this, stockNumber, name, type, price);
  this.division = 'household goods';
  this.stockNumber = stockNumber;
  this.name = name;
  this.department = department;
  this.type = type;
  this.price = price;
}

// BONUS 2
/* 
function Item(stockNumber, name, type, price) {
  this.stockNumber = stockNumber;
  this.name = name;
  this.type = type;
  this.price = price;
  this.logItem = function() {
    console.log(this);
    // BONUS 1:
    // for (let key in this) {
    //   console.log(`${key}: ${this[key]}`);
    // }
  };
}

function Clothing(stockNumber, name, size, gender, type, color, price) {
  Item.call(this, stockNumber, name, type, price);
  this.division = 'clothing';
  this.size = size;
  this.gender = gender;
  this.color = color;
}

Clothing.prototype = new Item();

function Household(stockNumber, name, department, type, price) {
  Item.call(this, stockNumber, name, type, price);
  this.division = 'household goods';
  this.department = department;
}

Household.prototype = new Item();
 */

let s20190001 = new Clothing('a1515', 'Keen Selvage', 9, 'F', 'running', 'olive/brindle', 89.99);
let h20190001 = new Household('55h2102', 'Jumbo watering can', 'Home/Garden', 'plastic', 19.95);

s20190001.logItem();
h20190001.logItem();
