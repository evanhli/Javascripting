
//https://www.sitepoint.com/javascript-closures-demystified/
function add(value1) {
  return function doAdd(value2) {
    return value1 + value2;
  };
}

//increment is the inner function
var increment = add(1);
console.log(increment) //[Function: doAdd]
//returns the two values
var foo = increment(2); // 3
console.log(foo);
var bar = increment(4); // 5 
console.log(bar);
// foo equals 3
