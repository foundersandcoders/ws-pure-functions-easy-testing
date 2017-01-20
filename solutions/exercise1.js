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
};

var incrementObject = function (object) {
  var newObject = {}

  Object.keys(object).forEach(function(x) {
    newObject[x] = object[x] + 1;
  });

  return newObject;
};
