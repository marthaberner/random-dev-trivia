
// What is the output when hello executed?

(function hello(){
	var x = "goodbye";
	var goodbye = function(){
		console.log("hello " + x);
	}
	return goodbye;
	x = "hello";
})();

// nothing. hello() returns a function but it is never invoked.

// ------------------------------------------------------

// What is logged to the console?

function f(){
   function f(){ console.log(1); }
   return f();
   function f(){ console.log(2); }
 }

f()

// => 2. hoisting.

// -----------------------------------------------

// What is logged to the console?

(function(foo){
  console.log(typeof foo.bar);
})({ foo: { bar: 1 } });

// => undefined. There is no foo.bar. There is foo.foo.bar.

// ---------------------------------------------------

// What is logged to the console?

(function goodbye(){
	var x = "goodbye";
	var hello = function(x){
		console.log(x);
	}
	x = 2;
	return hello;
})()();

// => undefined. x is never defined inside of the hello function.

// ---------------------------------------------------------

// What is logged to the console?

function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
console.log(typeof bar());

// => function. hoisting.

// ----------------------------------------------------

// Write a function translate that will return a version of the string that has
// been translated into "rövarspråket". That is, double every consonant and
// place an occurrence of "o" in between. For example:

function translate(str){

}

translate("this is fun") //=> "tothohisos isos fofunon"
