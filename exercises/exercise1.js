var constantNumber = 5;

var addOne = function () {
  constantNumber += 1;
  return constantNumber;
};


var timesTwo = function () {
  constantNumber = constantNumber * 2
  return constantNumber
};


var incrementArray = function (array) {
  array.forEach(function(x, i) {
    array[i] =  x + 1;
  })
  return array
}

var addNumberArray = function (array, number) {
  array.push(number);
  return array;
};

var incrementObject = function (object) {
  Object.keys(object).forEach(function(x) {
    object[x] = object[x] + 1
  });
  return object;
};
