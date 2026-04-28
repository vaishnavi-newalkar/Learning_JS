//Immediately Invoked Function Expression (IIFE)
//A function that runs as soon as it is defined.
// To remove pollution from global scope and to create a new scope for variables.
//Unnamed Iffi
// ; is very important while u write multiple iffi in a file
(function() {
    console.log("This is an IIFE");
})();

(function namedIffi() {  // name is given
    console.log("This is an IIFE");
})();

//IIFE with parameters
(function(name) {
    console.log("Hello " + name);
})("John");

//IIFE with return value
var result = (function(a, b) {
    return a + b;
})(5, 10);
console.log(result);

//IIFE with arrow function
(() => {
    console.log("This is an IIFE with arrow function");
})();

//IIFE with parameters and return value
var result2 = ((a, b) => a * b)(5, 10);
console.log(result2);

