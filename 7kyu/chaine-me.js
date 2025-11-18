//coding challenge 
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// returns 90;

//solution 
function chain(input, fs) {
  //Params we have an input and array that holds values from prev functions
  //Return the final value 
  //Example 
  //Pseudo code 
  
  let result = input; 
  
  for( let fn of fs ){
    result = fn(result)
  }
    
  return result
}