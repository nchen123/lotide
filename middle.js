const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    return (`Assertion Failed: ${array1} !== ${array2}`);
    }
  for (let i = 0; i < array1.length; i++){
      if ((array1[i] !== array2[i])) {
        return (`Assertion Failed: ${array1} !== ${array2}`);
      }
    } 
    return (`Assertion Passed: ${array1} === ${array2}`);
}
/*
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]))
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]))
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]))
*/

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
    }
  for (let i = 0; i < array1.length; i++){
      if ((array1[i] !== array2[i])) {
        return false;
      }
    } 
    return true;
}
/*
console.log(eqArrays([1, 2, 3], [1, 2, 3]))
console.log(eqArrays([1, 2, 3], [3, 2, 1]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
*/


// ACTUAL FUNCTION

const middle = function(array) {
  let middleOfArray = [];
  if (array.length <= 2) {
    return middleOfArray
  } 
  else if (array.length %2 === 0) {
    return [array [(array.length / 2) - 1], array[array.length / 2]];
  }
  else 
  {
    return [array[(array.length - 1) / 2]];
  }
}

// TEST CODE
// ...
assertArraysEqual(middle([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(middle(["time", "glass"]), ["time", "glass"])
assertArraysEqual(middle(["go", "to","the","park"]), [["go", "to","the","park"]])

