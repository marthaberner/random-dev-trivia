// What is logged to the console?

function estate(){
    var metalGate = true

    return function land(str) {
        console.log(metalGate);
    }

    metalGate = function() {
      console.log("Shazaam!");
    }
}

estate()()

// => true

// -----------------------------

(function(){
   console.log(typeof (arguments));
 })();

 // => object

 // -----------------------------

var f = function g(){ return 23; };
console.log(typeof(g()));

// => error - g is not defined

// ------------------------------

(function f(f){
  return typeof f();
})(function(){ return 1; }))

// => number

// ------------------------------

// Write a function that finds the second prime after any given POSITIVE number.

number = findSecondPrimeAfter(11);
console.log(number).should == 17;

number = findSecondPrimeAfter(12);
console.log(number).should == 17

// -------------------------------

var foo = {
  bar: function() { return this.baz; },
  baz: 1
};

console.log((function(){
  console.log(arguments);
  return typeof arguments[0]();
})(foo.bar));

// => undefined

// ------------------------------

var foo = (function a() { return function b() { return 1 } })()

console.log(foo);

// => [Function: b]

// -------------------------------
var students = [
  "Zack",
  "Sam",
  "Amanda",
  "Ahkil",
  "Steve",
  "Nick",
  "Jacob",
  "Derek",
  "Jaylyn",
  "Dylan",
  "Claire",
  "Aanal"
]

function teamsBuilder(array) {

}

// output should be an array of arrays where each array has 3 student names in it.
// There should be no duplicates. Each student should be added to only one team.
// EXAMPLE: [ [ 'Amanda', 'Steve', 'Sam' ], ["Zack", "Akhil", "Jaylyn",] .... etc ]

// -----------------------------

// Sort!!

var input = [1, 6, 8, 122, 33, 66, 99, 4]
// result should be [1, 4, 6, 8, 33, 66, 99, 122]
