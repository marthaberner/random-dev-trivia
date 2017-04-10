for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0)
}

// ------------------------------------

function foo() {
  run()

  var run = "hello"

  function run() {
    console.log("z");
  }

  console.log(run);
}

foo()
// -------------------------

function doStuff() {
  console.log("snap");
}

setTimeout(doStuff, 1000)
console.log("crackle");

// --------------------------------
now = "Today"

setTimeout(function () {
  console.log(now);
}, 10)

var now = "Tomorrow"

// ---------------------------

function doStuff() {
  console.log("pop");
}

setTimeout(doStuff(), 1000)
console.log("crackle");

// ---------------------------

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

// -------------------------------

var foo = (function a() { return function b() { return 1 } })()

console.log(foo);

// -----------------------------------

var foo = { name: "Chevy" }
var bar = { name: "Ford" }

foo.bar = foo
bar.foo = bar
foo.foo = bar

console.log(foo.bar.name);
console.log(foo.foo.name);

//-----------------------------
