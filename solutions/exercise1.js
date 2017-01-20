var constantNumber = 5;
var constantArray = [5, 7, 23, 4];
var constantObject = {
  "a": 5,
  "b": 2,
  "c": 8
};


var addOne = function (integer) {
  return integer + 1;
};

var timesTwo = function (integer) {
  return integer * 2;
};

var incrementArray = function (array) {
  return array.map(function(x) {
    return x + 1;
  });
};

var addNumberArray = function (array, number) {
  return array.concat([number])
}

var incrementObject = function (object) {
  var newObject = {}

  Object.keys(object).forEach(function(x) {
    newObject[x] = object[x] + 1;
  });

  return newObject;
};
