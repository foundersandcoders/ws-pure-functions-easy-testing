var constantNumber = 5;
var constantArray = [5, 7, 23, 4];
var constantObject = {
  "a": 5,
  "b": 2,
  "c": 8
};

var addOne = function () {
  constantNumber += 1;
  return constantNumber;
};


var timesTwo = function () {
  constantNumber = constantNumber * 2
  return constantNumber
};


var incrementValues = function (array) {
  array.forEach(function(x, i) {
    array[i] =  x + 1;
  })
  return array
}


var incrementObject = function (object) {
  Object.keys(object).forEach(function(x) {
    object[x] = object[x] + 1
  });
  return object;
};
