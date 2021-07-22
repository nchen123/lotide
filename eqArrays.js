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
console.log(eqArrays([1, 2, 3], [1, 2, 3]))
console.log(eqArrays([1, 2, 3], [3, 2, 1]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should Passed
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should Failed
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should Passed
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should Failed


/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(9, "6");
assertEqual("Summer", "Summer");
*/