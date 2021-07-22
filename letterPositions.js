const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log (`Assertion Failed: ${array1} !== ${array2}`);
    }
  for (let i = 0; i < array1.length; i++){
      if ((array1[i] !== array2[i])) {
        console.log (`Assertion Failed: ${array1} !== ${array2}`);
      }
    } 
    console.log (`Assertion Passed: ${array1} === ${array2}`);
}

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


const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(/\s/g, "");
  for (let i = 0; i < sentence.length; i ++) {
    if (results[sentence[i]] ) {
      results [sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i]
    }
  }
  return results;
}

assertArraysEqual(letterPositions("hello").e, [1])
assertArraysEqual(letterPositions("lighthouse in the house").g, [2])

