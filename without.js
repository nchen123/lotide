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



const arrayWithout = function (source, itemsToRemove) {
  let newArray = [];
  for (i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      console.log(!itemsToRemove.includes(source[i]));
      newArray.push(source[i])
    }
  }
  return newArray
}
console.log(arrayWithout(["hello", "world", "lighthouse"], ["lighthouse"]));

const words = ["hello", "world", "lighthouse"];
arrayWithout(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
