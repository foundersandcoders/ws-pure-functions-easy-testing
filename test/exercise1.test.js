var constantArray = [5, 7, 23, 4];
var constantObject = {
  "a": 5,
  "b": 2,
  "c": 8
};

QUnit.test('Refactor our addOne function so it is pure.', function ( t ) {
  t.equal(addOne(constantNumber), 6, "add one returns argument + 1");
  t.equal(constantNumber, 5, "constant number has not been altered");
  t.equal(addOne(constantNumber), 6,
    "Returns the same value when called with the same argument");
  t.equal(addOne(4), 5, 'works for other values');
  t.equal(addOne(104), 105, 'works for other values');
  t.equal(addOne(7), 8, 'works for other values');
  t.equal(addOne(78), 79, 'works for other values');
});

QUnit.test('Refactor our timesTwo function so it is pure.', function ( t ) {
  t.equal(timesTwo(constantNumber), 10, "Returns argument doubled");
  t.equal(constantNumber, 5, "constant number has not been altered");
  t.equal(timesTwo(constantNumber), 10,
    "Returns the same value when called with the same argument");
  t.equal(timesTwo(4), 8, "works for other values");
  t.equal(timesTwo(27), 54, "works for other values");
  t.equal(timesTwo(7), 14, "works for other values");
  t.equal(timesTwo(23), 46, "works for other values");
});

QUnit.test('Refactor our incrementArray function so it is pure.', function ( t ) {
  t.deepEqual(incrementArray(constantArray), [6, 8, 24, 5],
    "Returns array of incredment values");
  t.deepEqual(constantArray, [5, 7, 23, 4],
    "constant array has not been altered");
  t.deepEqual(incrementArray(constantArray), [6, 8, 24, 5],
    "Returns the same value when called with the same argument");
  t.deepEqual(incrementArray([3, 5, 12]), [4, 6, 13], "works for other values");
  t.deepEqual(incrementArray([7, 54, 1]), [8, 55, 2], "works for other values");
  t.deepEqual(incrementArray([1]), [2], "works for other values");

});

QUnit.test('Refactor our addNumberArray function so it is pure.', function ( t ) {
  t.deepEqual(addNumberArray(constantArray, constantNumber), [5, 7, 23, 4, 5],
    "returns array with a new number appended");
  t.deepEqual(constantArray, [5, 7, 23, 4],
    "constant array has not been altered");
  t.deepEqual(addNumberArray(constantArray, constantNumber), [5, 7, 23, 4, 5],
    "Returns the same value when called with the same argument");
  t.deepEqual(addNumberArray([4, 100, 12], 27), [4, 100, 12, 27],
    "works with other values");
  t.deepEqual(addNumberArray([2], 5), [2, 5],
    "works with other values");
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
  t.deepEqual(incrementObject({ "a": 4, "b": 12, "c": 9 }),
    { "a": 5, "b": 13, "c": 10 }, "works with other values");
});
