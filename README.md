# Pure functions - easy testing

One of the biggest benefits of testing your code, is that you will be encouraged to write testable code. Testable code will tend to be predictable, readable, and split into small pure functions.

If you've never written code in this way, it can be hard to start. This tutorial is intended to help people who are interested in testing their code learn how to start writing pure testable functions.

In this tutorial I will assume a basic familiarity with Javascript, and enough knowledge of testing to understand the the syntax.

## Why should I write pure functions?

If you are used to writing code which relies on global state and utilises side effects then writing pure functions can feel like imposing unnecessary restrictions on yourself.

I encourage you to fight through this inertia, as pure functions can have huge benefits for your code. Today we will be focusing on one particular benefit:

**easy testing**

If you've tried to start writing tests and struggled, it could well be that the code you are writing is simply _too hard to test_. If a function relies on global variables, it means your tests will have to set up global state, reset it for each test, and if a test fails it's hard to be sure exactly why.

## Examples stolen from FAC10

If you are a member of FAC10 (the intended audience of this workshop) you might recognise some of this code. Please don't be offended! You're all writing much better code than I was in your position.

### Example 1 - let's be declarative, let's get functional

In this example we create the empty array `soundObjects`. We then mutate it. Because this code isn't broken out into functions, and relies on global variables, it's very hard to test.

```js
var sounds = [
  'http://www.soundjig.com/mp3/soundfx/human/aaaahhhh.mp3',
  'http://www.soundjig.com/mp3/soundfx/human/breath.mp3'
];

var soundObjects = [];

sounds.forEach(function (soundSrc) {
  var sound = new Audio(soundSrc);
  soundObjects.push(sound);
});
```

In order to make this piece of functionality more testable, we can wrap it up in a function `makeSoundObjects` will take an array as an argument, and return a new array with the information we want. This means we can run tests with any array that we want, and that we can create our soundObjects in the form we want without ever having to mutate it.

```js
// [] -> []
function makeSoundObjects (sounds) {
  return sounds.map(function (soundSrc) {
    return new Audio(soundSrc);
  });
}

var soundObjects = makeSoundObjects(sounds)
```

### Example 2 - What if I need side effects?
Most programs we want to write wouldn't work if we completely disallowed side effects. How then we can ensure that our impure functions are testable?

This function takes no arguments, alters the DOM based on the global variable `changeTransition`, then changes the the global variable `changeTransition`.

```js
//VISIONTRANSITION

var changeTransition = true;

function visionChange () {

  var visiontext = document.getElementById('hiddenvision');
  var visionimage = document.getElementById('visionimage');
  if (changeTransition === true) {
  visiontext.style.opacity = 1;
  visionimage.style.opacity = 0;
  }

  if (changeTransition === false) {
    visiontext.style.opacity = 0;
    visionimage.style.opacity = 1;
  }
  changeTransition = changeTransition == true ? false : true;

}
```
Here we have rewritten the function to to be two separate functions, both of which will return the same value every time, when given the same argument.

The second function returns an impure function, which we can wait until the right moment and then call.

Imagine our impure function as an unpredictable cannon, which we load in the safest way possible. We eventually light the fuse and run away.

```js
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

These are two functions which we can easily test:

```js
test('visionChange correctly switches boolean', function(t) {
  var actual = visionChange(true);
  var expected = false;
  t.equal(actual, expected, 'Should return false when given true');
  t.end();
});

test('updateDom returns correct type', function(t) {
  var actual = typeof updateDom(true);
  var expected = 'function';
  t.equal(actual, expected, 'Should return a function' );
  t.end();
});
```

We now have two easily testable functions, which we can chain together to get the same functionality we had before.

## Exercises!

* clone this repo
* open `specrunner.html` in the browser
* appreciate the failing tests
* open `exercises/exercise1.js`
* refactor the functions to make the tests pass. It will be useful to open the tests and look at exactly what is expected.

## Glossary

### Pure functions

A pure function takes in some number of arguments and then returns a value.

When called with a given set of arguments a pure function will __always__ return the same result.

A pure function has no side effects. This means that simply calling the function should have no effect on the rest of your program - it should do nothing but return a value.

### Side effect

A functions side effects are anything that it does beyond simply returning a value. For example this function has the side effect of changing a global variable

```js
var age = 21

function sideEffector () {
  age += 1
}

console.log(age) // 21
sideEffector()
console.log(age) // 22
```

Side effects also include making HTTP requests and manipulating the DOM.
