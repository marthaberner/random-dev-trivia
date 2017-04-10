# Game / question sets are in no particular order
Code should be copied and delivered to students in whatever fashion works best for
your class. G10 preferred Slack.

# GAME 1

#### Q1

__What is the output when outer is executed?__

```
function outer(){
	var x=1;
	var inner = function(){
		return (">"+x);
	}

	x=2;
	return inner;
}

outer();

```

__ANSWER: nothing. it returns a function that is not being invoked__

---
#### Q2

__What is logged to the console?__

```
function outer(){
	var x=1;
	var inner = function(){
		(">"+x);
		x=2;
	}
	return inner;
}

console.log(outer()());
```

__ANSWER: undefined. inner doesn't return anything__

---

#### Q3

__What is logged to the console?__

```
function goodbye(){
	var x="goodbye";
	var hello = function(x){
		console.log(x);
	}
	x=2;
	return hello;
}

goodbye()();
```


__ANSWER: undefined because x is never defined inside of the hello function__

---
#### Q4

__What is logged to the console?__

```
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
```
__ANSWER: "o2 for the win!" the variables evaluate to equal because they point to the same object in memory__

---
#### Q5

__Given the following, fill in the function so it detects if an object is empty.
the function should simply return true or false. NO INTERNET ALLOWED )
NOTE: There is a most favorable way to do this and teams whose answer reflect this will
be awarded 3 points__

```
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
```

__3 point answer: return(Object.keys(obj).length === 0)__

---
#### Q6

__Given the following, fill in the function so it detects if a string has duplicate letters.
It should be case insensitive.__

```
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

```

---

# Game 2

#### Q1

__What gets logged to the console? __

```
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
```

__ANSWER: true__

---

#### Q2

__What gets logged to the console?__

```
(function(){
   console.log(typeof (arguments));
 })();
 ```

 __ANSWER: object__

---

#### Q3

__What gets logged to the console?__

```
var f = function g(){ return 23; };
console.log(typeof(g()));
```
__ANSWER: an error - g is not defined__

---

#### Q4

__What gets logged to the console?__
```
console.log((function f(f){
  return typeof f();
})(function(){ return 1; }))
```

__ANSWER: number__

---

#### Q5

__What gets logged to the console?__
```
var foo = {
  bar: function() { return this.baz; },
  baz: 1
};

console.log((function(){
  console.log(arguments);
  return typeof arguments[0]();
})(foo.bar));
```
__ANSWER: undefined__

---

#### Q6

__What gets logged to the console?__
```
var foo = (function a() { return function b() { return 1 } })()

console.log(foo);
```
__ANSWER: [Function: b]__

---

#### Q7

__Given the following, fill in the function so that when invoked it outputs an array of arrays where each
array is a unique team of 3 students. Each student should be added to only one team.
There should be no duplicates.
EXAMPLE OUTPUT: [ [ 'Amanda', 'Steve', 'Sam' ], ["Zack", "Akhil", "Jaylyn",] .... etc ]__
```
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
```
---

#### Q8

__Write a function that takes a given array and sorts it.__
```
var input = [1, 6, 8, 122, 33, 66, 99, 4]
// result should be [1, 4, 6, 8, 33, 66, 99, 122]
```
---

# Game 3 (easier)

#### Q1

__What gets logged to the console?__
```
var an_object = {
  hat: function() { return (this === an_object); }
}
console.log(an_object.hat());

```
__ANSWER: true__

---

#### Q2

__What gets logged to the console?__
```
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
console.log(typeof(bar()));
```
__ANSWER: function__

---

#### Q4

__What gets logged to the console and in what order?__

```
var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x || x;
        }
    }
}

var go = foo.baz.bar;

console.log(go());
console.log(foo.baz.bar());
```
__ANSWER:  
3  
1__

---

#### Q5

__What happens when the following function is invoked?__
```
function amIaString(possibleString) {
  if (typeof possibleString = "string") {
    return "Yep, I'm a string!";
  } else {
    return "Nope, I'm not a string. :(";
  }
}

amIaString("Holla!");
```

__Acceptable ANSWER: A single equal operator assigns equality, it does not
check for equality. Therefore an error will occur.__

---

#### Q6

__At the end of this expression, what is the value of y?__

```
var x = { a: 4, b: 3 };
var y = x;
x.w = 11;
y.z = 7;
```
__ANSWER: { a: 4, b: 3, z: 7, w: 11 }__

---

#### Q7

__Given the following expected output, [3, 9, 15, 18], what is wrong with the function?__

```
var a = [ 1, 3, 5, 6]

function tripler(arr){
  var newArr = []
  for(var i = 1; i< arr.length; i++){
    newArr.push(arr[i] * 3)
  }
  return newArr
}

console.log(tripler(a));
```

---

#### Q8

__Given the following function, what is wrong with this code?__
```
function addToItselfTenTimes(num) {
  for (var i=0;i<10;i++) {
    var total = 0;
    total += num;
  }
  return total;
}
```

__ANSWER: var total is defined inside the loop and therefore reset to 0 with every iteration.
NOTE: Given the name of the function, students should be able to deduce what
the function is supposed to do.__

---

# Game 4 (prerequisite: stack / heap lessons)

#### Q1

__What is logged to the console and in what order?__
```
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0)
}
```
__ANSWER:  
3  
3  
3__

#### Q2

__What is logged to the console and in what order?__

```
function foo() {
  run()

  var run = "hello"

  function run() {
    console.log("z");
  }

  console.log(run);
}

foo()
```
__ANSWER:  
z  
hello__

---

#### Q3

__What is logged to the console and in what order?__

```
function doStuff() {
  console.log("snap");
}

setTimeout(doStuff, 1000)
console.log("crackle");
```

__ANSWER:  
crackle  
snap__

---

#### Q4

__What is logged to the console and in what order?__

```
now = "Today"

setTimeout(function () {
  console.log(now);
}, 10)

var now = "Tomorrow"
```
__ANSWER: "Tomorrow"__

---

#### Q5

__What gets logged to the console and in what order?__

```
function doStuff() {
  console.log("pop");
}

setTimeout(doStuff(), 1000)
console.log("crackle");
```

__ANSWER:  
pop  
crackle__

---

#### Q6

__What is logged to the console and in what order?__

```
setTimeout(function () {
  hour = hour === "1am" ? "2am" : "5am"
  console.log(hour);
}, 10)

setTimeout(function () {
  hour = hour === "5am" ? "6am" : "noon"
  console.log(hour);
}, 50)

setTimeout(function () {
  hour = hour === "2am" ? "3am" : "7am"
  console.log(hour);
}, 20)

var hour = "1am"
```

__ANSWER:  
2am  
3am  
noon__

---

#### Q7

__What is logged to the console and in what order?__

```
var foo = (function a() { return function b() { return 1 } })()

console.log(foo);
```
__ANSWER: [Function: b]__

---

#### Q8

__What is logged to the console and in what order?__

```
var foo = { name: "Chevy" }
var bar = { name: "Ford" }

foo.bar = foo
bar.foo = bar
foo.foo = bar

console.log(foo.bar.name);
console.log(foo.foo.name);
```

__ANSWER:  
Chevy  
Ford__

---
