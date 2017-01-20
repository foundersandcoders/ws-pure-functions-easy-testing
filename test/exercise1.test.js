QUnit.test('Refactor our addOne function so it is pure.', function ( t ) {
  t.equal(addOne(constantNumber), 6, "add one returns argument + 1");
  t.equal(constantNumber, 5, "constant number has not been altered");
  t.equal(addOne(constantNumber), 6,
    "Returns the same value when called with the same argument");
});

QUnit.test('Refactor our timesTwo function so it is pure.', function ( t ) {
  t.equal(timesTwo(constantNumber), 10, "Returns argument doubled");
  t.equal(constantNumber, 5, "constant number has not been altered");
  t.equal(timesTwo(constantNumber), 10,
    "Returns the same value when called with the same argument");
});

QUnit.test('Refactor our incrementArray function so it is pure.', function ( t ) {
  t.deepEqual(incrementArray(constantArray), [6, 8, 24, 5],
    "Returns array of incredment values");
  t.deepEqual(constantArray, [5, 7, 23, 4],
    "constant array has not been altered");
  t.deepEqual(incrementArray(constantArray), [6, 8, 24, 5],
    "Returns the same value when called with the same argument");
});

QUnit.test('Refactor our addNumberArray function so it is pure.', function ( t ) {
  t.deepEqual(addNumberArray(constantArray, constantNumber), [5, 7, 23, 4, 5],
    "returns array with a new number appended");
  t.deepEqual(constantArray, [5, 7, 23, 4],
    "constant array has not been altered");
  t.deepEqual(addNumberArray(constantArray, constantNumber), [5, 7, 23, 4, 5],
    "Returns the same value when called with the same argument");
})

QUnit.test('Refactor our incrementObject function so it is pure', function ( t ) {
  var expected = {
    "a": 6,
    "b": 3,
    "c": 9
  };
  var startingObject = {
    "a": 5,
    "b": 2,
    "c": 8
  };

  t.deepEqual(incrementObject(constantObject), expected,
    "Returns array of incremented values");
  t.deepEqual(constantObject, startingObject,
    "constant array has not been altered");
  t.deepEqual(incrementObject(constantObject), expected,
    "Returns the same value when called with the same argument");
});
