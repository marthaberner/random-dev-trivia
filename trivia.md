### What does the following code print to the console?
```
var an_object = {
  hat: function() { return (this === an_object); }
}
console.log(an_object.hat());

```
### What is printed to the console?
```
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
console.log(typeof(bar()));
```
### What is printed to the console and in what order?
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
### What does this function return and why?
```
function amIaString(possibleString) {
  if (typeof possibleString = "string") {
    return "Yep, I'm a string!";
  } else {
    return "Nope, I'm not a string. :(";
  }
}
=> amIaString("Holla!");

```
### Invoke the following function using call, passing this as the first argument, and 3, 4, 5, 6 and 7 as the other arguments:

```
var add = function(a, b, c, d, e){
    return a + b;
}
```
### At the end of this expression, what is the value of y?
```
var x = { a: 4, b: 3 };
var y = x;
x.w = 11;
y.z = 7;
=> { a: 4, b: 3, z: 7, w: 11 }
```
### What's wrong with this code?
```
function tripler(arr){
  var newArr = []
  for(var i = 1; i< arr.length; i++){
    newArr.push(arr[i] * 3)
  }
  return newArr
}
```
### What's wrong with this code?
```
function addToItselfTenTimes(num) {
  for (var i=0;i<10;i++) {
    var total = 0;
    total += num;
  }
  return total;
}
```
### What is the git command to change a git repository remote url for a remote named foobar?
```
```
### What is the git command to add only the file `books.js` to your staging area?
```
```
### What is the git command to see all of your previous commits?

### What is the git command to upload local code in a branch called `foo` to a remote called `bizzbazz`?
```
```
