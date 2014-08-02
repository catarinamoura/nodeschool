 // # Task

 // Use Array#filter to write a function called getShortMessages.

 // getShortMessages takes an array of objects with '.message' properties
 // and returns an array of messages that are less than < 50 characters long.

 // ## Arguments

 //   * messages: an Array of 10 to 100 random objects that look something like this:

 //     {
 //       message: 'Esse id amet quis eu esse aute officia ipsum.' // random
 //     }

 // ## Conditions

 //   * Do not use for loops or Array#forEach.

 // ## Hint

 //   * Try chaining some Array methods!

 // ## Expected Output

 // The function should return an array containing the messages themselves,
 // without their containing object.

 // e.g.

 //     [ 'Tempor quis esse consequat sunt ea eiusmod.',
 //       'Id culpa ad proident ad nulla laborum incididunt.',
 //       'Ullamco in ea et ad anim anim ullamco est.',
 //       'Est ut irure irure nisi.' ]

 // ## Resources

 //   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 //   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

 // ## Boilerplate

    function getShortMessages(messages) {

      var filtered = messages.filter( function f(obj){
            // console.log(obj.message);
             return obj.message.length < 50 ;
      })
      
      var array_messages = filtered.map(function m(obj_short){
          
          return obj_short.message;
       })
      return array_messages;
     }
  
     module.exports = getShortMessages
     