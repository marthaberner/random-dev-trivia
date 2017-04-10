## Write a function that ...




## Questions

### What does the following expression return?

```
3 / "bob";
```
### What gets logged to the console?
```
var foo = function foo(foo) {
   console.log(this.foo === foo || "Nuh uh");  
};

foo();
```

### What do these evaluate to?
-------------------------------------
```
Number("1") - 1 == 0
```
--------------------------------------
```
var f = function g(){ return 23; };

typeof g;
```
--------------------------------------
```
String('Hello') === 'Hello'
```
---------------------------------------
```
"This is a string" instanceof String;`
```
---------------------------------------

### Given the below css and html:

```
<div class="a">
    text1
    <div class="b">
        text2
        <div class="a">
            text3
        </div>
    </div>
</div>
```
```
.a .b {
    color:blue;
}
.a {
    color: red;
}
.b {
    color: green;
}
```

#### What color is text 1?

#### What color is text 2?

#### What color is text 3?

### When the following css is added:
```
.b .a {
 color: yellow;
}
```
```
div {
  color:brown;
}
```

```
<div class="a">
    text1
    <div class="b">
        text2
        <div class="a">
            text3
        </div>
    </div>
</div>
```

#### What color is text 1?

#### What color is text 2?

#### What color is text 3?
---------------------------------------

#### What is the command to create a new branch called donut?
----------------------------------

#### If in the master branch, what is the command to merge the ‘donut’ branch to the ‘master’branch?
---------------------------------------------

#### Write the code to make the test pass:

```
describe("Momo", function() {
    it("is a dog", function() {
        expect(momo.isDog).toEqual(true);
     });
});
```

#### What does the console output when estate()() is called?

```
function estate(){
    var metalGate = true
    return function land(str) {
        console.log(metalGate);
    }
    var metalGate = function() {
      return "Shazaam!"
    }
}

estate()()
```
#### What does the console output when estate("gnome")() is called?

```
function estate(ornament){
    return function lawn() {
        return ornament
    }
}

console.log( estate("gnome")() )
```
