// # Task

// Convert the following code from a for-loop to Array#map:

//     function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }

//     module.exports = doubleAll

// ## Arguments

//   * numbers: An Array of 1 to 20 Integers between 0 and 9

// ## Conditions

//   * Do not use any for/while loops.
//   * You do not need to define any additional functionsunless a stub is provided in the boilerplate.
//   * Your solution should use Array.prototype.map()

// ## Resources

//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// ## Boilerplate

    function doubleAll(numbers) {
      
      return numbers.map(function doublenumber(num){
          return num*2;    
        })
    }

    module.exports = doubleAll