// Turning words into software - 10 min

// Given I have a function called amblescray
// And I pass  that function a word
// When that word begins with a consanant
// Then that consonant would move to the end of the word
// And that consonant should have the suffix "ay" added to it

// When a word begins with a cluster of consontants
// Then that cluster of consontants is moved to the end of the word
// And that cluster should have the suffix "ay" added to it

// When a word begins with a vowel
// Then the suffix "ay" is added to the end of the word

// EXAMPLES:
// amblescray("apple") => "appleay"
// amblescray("switch") => "itchsway"
// amblescray("hello") => "ellohay"

// -----------------------------------------------------------------------

// What gets logged to the console? 2 min

console.log((function f(f){
  return typeof f();
})(function(){ return 1; }))

// => number

// -----------------------------------------------------------------------

// What does the invoked function return? 2 min


function foo(name){
  return !((name.length > 3 && name.length < 5) || name.length === 3)
  function foo(name){
    return ((name.length > 3 && name.length < 5) || name.length === 3)
  }
}

function who(name) {
  return foo(name) ? "roger dodger" : "no way jose";
}

console.log(who("Maryanne"));

// => roger dodger

// -----------------------------------------------------------------------

// What gets logged to the console? 2 min

var foo = (function a() { return function b() { return 1 } })()

console.log(typeof(foo));

// => function

// -----------------------------------------------------------------------

// Turning words into software

// Given I have a function called callMeMaybe
// When I pass a phone number as a string to that function
// And that number includes parens, a dash, and spaces
// Then the parens, dash and spaces are removed
// And the number is returned as a string

// When I pass a phone number as a string to that function
// And that number includes a period
// Then the periods are removed
// And the number is returned as a string

// Given I have a function called toString
// When I pass that function the returned value of calleMeMaybe
// Then toString() returns the phone number as a string and formatted (312) 555-1212
