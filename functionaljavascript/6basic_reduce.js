// # Task

// Given an Array of strings, use Array#reduce to create an object that
// contains the number of times each string occured in the array. Return the
// object directly (no need to console.log).

// ## Example

//     var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

//     console.log(countWords(inputWords))

//     // =>
//     // {
//     //   Apple: 2,
//     //   Banana: 1,
//     //   Durian: 3
//     // }

// ## Arguments

//   * inputWords: An array of random Strings.

// ## Conditions

//   * Do not use any for/while loops.
//   * You do not need to define any additional functionsunless a stub is provided in the boilerplate.

// ## Resources

//   * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// ## Boilerplate

    function countWords(inputWords) {
      return inputWords.reduce(function (obj,currentValue){
        obj[currentValue] = (obj[currentValue]+1) || 1 ;
        return obj;
          },{}); // initial value is an empty object -> obj = {}
    }
    module.exports = countWords;