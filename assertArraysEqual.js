const eqArrays = function(array1, array2) {
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
console.log(eqArrays([1, 2, 3], [1, 2, 3]))
console.log(eqArrays([1, 2, 3], [3, 2, 1]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
