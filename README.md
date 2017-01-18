# pure-functions-easy-testing
A tutorial showing impure functions from FAC10s repos - rewriting them using pure functions to make them testable.

## what is a pure function?
Simply put, a pure function takes in some number of arguments and then returns a value.

When called with a given set of arguments a pure function will __always__ return the same result.

A pure function has no side effects. This means that simply calling the function should have no effect on the rest of your program - it should do nothing but return a value.

## Why should I write pure functions?
If you are used to writing code which alters global state, and doesn't strictly require functions to simply take and return values, writing pure functions can feel like imposing unecessary restrictions on yourself.

I encourage you to fight through this inertia, as pure functions can have huge benefits for your code. Today we will be focusing on one particular benefit

**easy testing**

If you've tried to start writing tests and struggled, it could well be that the code you are writing is simply _too hard to test_. If a function relies on global variables, it means your tests will have to set up global state, reset it for each test, and if a test fails it's hard to be sure exactly why.

## Examples stolen from FAC10
I jumped into your repos and stole functions willy nilly.

### example 1

In this example we are changing declare a sound object global variable, and then we mutate it. I don't want to try and test this code.

```
const sounds = [
  'http://www.soundjig.com/mp3/soundfx/human/aaaahhhh.mp3',
  'http://www.soundjig.com/mp3/soundfx/human/breath.mp3'
];

const soundObjects = [];

sounds.forEach(soundSrc => {
  let sound = new Audio(soundSrc);
  soundObjects.push(sound);
});
```
Instead lets declare a which will return a testable pure function
```
function makeSoundObjects (sounds) {
  return sounds.map(soundSrc => new Audio(soundSrc))
}
```

testing is easy, as we can now pass as many different arrays of sounds in as we want, and check that we the results we expect.

### What if I need side effects?
Most programs we want to write wouldn't work if we completely disallow side effects. How then we can ensure that our impure functions are testable?

This function takes no arguments, alters the dom based on the global variable `changeTransition`, then changes the the global variable `changeTransition`.
```
//VISIONTRANSITION

var changeTransition=true;

function visionChange(){

  var visiontext = document.getElementById('hiddenvision');
  var visionimage = document.getElementById('visionimage');
  if (changeTransition===true){
  visiontext.style.opacity=1;
  visionimage.style.opacity=0;
  }

  if (changeTransition===false){
    visiontext.style.opacity=0;
    visionimage.style.opacity=1;
  }
  changeTransition = changeTransition == true ? false : true;

}
```
Here we have rewritten the function to to be two seperate functions, both of which will return the same value every time, when given the same argument.

The second function returns an impure function, which we can wait until the right moment and then call.

Imagine our impure as being an unpredictable cannon, which we load in the safest way possible. Then eventually light the fuse, and run away from.  
```
function visionChange (changeTransition) {
  return changeTransition ? false : true
}

function updateDom (changeTransition) {
  return function() {
    var visiontext = document.getElementById('hiddenvision');
    var visionimage = document.getElementById('visionimage');
    visiontext.style.opacity = changeTransition ? 1 : 0;
    visionimage.style.opacity = changeTransition ? 0 : 1
  }
}
```
These are two functions which we can easily test
```
test(`functions return our stuff`, (t) => {
  t.equal(visionChange(true), false);
  t.equal(visionChange(false), true);
  t.equal(updateDom(true), function)
  t.equal(updateDom(false), function)
})
```
We have now two easily testable functions, which we can chain together to get the same functionality we had before.
