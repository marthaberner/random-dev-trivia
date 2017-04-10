// What is the output when outer executed? (1 Doogie)

function outer(){
	var x=1;
	var inner = function(){
		return (">"+x);
	}

	x=2;
	return inner;
}

outer();

// => nothing. it returns a function that is not being invoked.

// --------------------------------------------------------------

// What is logged to the console? (1 Doogie)

function outer(){
	var x=1;
	var inner = function(){
		(">"+x);
		x=2;
	}
	return inner;
}

console.log(outer()());

// => undefined. inner doesn't return anything

// ---------------------------------------------------------------

// What is logged to the console? (1 Doogie)

function goodbye(){
	var x="goodbye";
	var hello = function(x){
		console.log(x);
	}
	x=2;
	return hello;
}

goodbye()();

// => undefined because x is never defined inside of the hello function

// --------------------------------------------------------------------
// What is logged to the console? (3 Doogies)

var obj1 = {};
var obj2 = {};

var o1 = function(){
	if({} === {}) { console.log("o1 for the win!")}
}
var obj3 = { x: 1 }
var obj4 = obj3;
obj3["x"] = 4;

var o2 = function () {
	if(obj4 === obj3){ console.log("o2 for the win!")}
}

(function(){(o1() || o2())});

// => "o2 for the win!" the variables evaluate to equal because they point to the same object

// --------------------------------------------------------------------

// Given the following, fill in the function so it detects if an object is empty.
// the function should simply return true or false. 3 points awarded to simplest answer(least amount of lines and easiest to evaluate visually)
// NO INTERNET ALLOWED ( 6 Doogies ) ??

var obj1 = {};
var obj2 = {
	x: 3,
	y: 4,
	z: 5,
	a: 6,
	b: 7,
	c: 8,
	d: 9,
	e: 10
};

var isEmpty = function (obj) {
  return Object.keys(obj).length == 0
}

console.log(isEmpty(obj1)); // => true
console.log(isEmpty(obj2)); // => false

// => simplest: return(Object.keys(obj).length === 0)

// --------------------------------------------------------------

// Given the following, fill in the function so it detects if a string has duplicate letters.
// It should be case insensitive.

var str1 = "supercalifragilisticexpialidocious"
var str2 = "ABab";
var str3 = "a";
var str4 = "abcDeFg"

function hasDupes(str) {

}

console.log(hasDupes(str1)) // => true
console.log(hasDupes(str2)) // => true
console.log(hasDupes(str3)) // => false
console.log(hasDupes(str4)) // => false

// --------------------------------------------------------------------
