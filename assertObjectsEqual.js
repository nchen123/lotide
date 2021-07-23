const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // console.log(`Example label: ${inspect(actual)}`);
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return (`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  for (const key of Object.keys(actual)) {
    if(actual[key] !== expected[key]) {
      return (`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  }
  return (`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true
// assertEqual(assertObjectsEqual(ab, ba),true);
// 
const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false
// assertEqual(assertObjectsEqual(ab, abc),false);





// const assertArraysEqual = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return (`Assertion Failed: ${array1} !== ${array2}`);
//     }
//   for (let i = 0; i < array1.length; i++){
//       if ((array1[i] !== array2[i])) {
//         return (`Assertion Failed: ${array1} !== ${array2}`);
//       }
//     } 
//     return (`Assertion Passed: ${array1} === ${array2}`);
// }
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))
// console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]))
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]))
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]))
