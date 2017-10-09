// scroll down for solutions
// no peeking!
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var constantNumber = 5;
var constantArray = [5, 7, 23, 4];
var constantObject = {
  "a": 5,
  "b": 2,
  "c": 8
};


var addOne = function (num) {
  return num+1;
};


var timesTwo = function (num) {
  return num*2;
};


var incrementArray = function (array) {
  return array.map(function(x){
    return x+1;
  });
}

var addNumberArray = function (array, number) {
  return array.concat(number);
};

var incrementObject = function (object) {
  var result = {};
  Object.keys(object).forEach(function (x) {
    result[x] = object[x] + 1
  });
  return result;
};


module.exports = {
  addOne,
  timesTwo,
  incrementArray,
  addNumberArray,
  incrementObject,
  constantNumber,
  constantArray,
  constantObject
}
