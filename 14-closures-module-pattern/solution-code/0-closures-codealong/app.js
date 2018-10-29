function sayNumber() {
    // Local variable that ends up within closure
    let num = 42;
    const say = function() { 
      console.log(num); 
      num++; // moved into inner function
    }
    return say;
}
const sayIt1 = sayNumber();
const sayIt2 = sayNumber();
sayIt1(); // logs 42
sayIt1(); // logs 43
sayIt1(); // logs 44
sayIt2(); // logs 42
sayIt2(); // logs 43