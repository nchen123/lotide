const assertEqual = function(actual, expected) {
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

const tail = function(array) {
  return array.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);