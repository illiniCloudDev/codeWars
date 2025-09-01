//coding challenge
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.

//solution 

function factorial(n){
  //Parameters is a number 
  //Return the product or error
  //Examples n = 5 -> 5*4*3*2*1
  //Pseudo code
  
  
  //run a loop that counts the number from top to bottom
  //use .reduce?
  //turn the number into an array of numbers? 
  if( n  < 0 || n > 12) throw new RangeError("Range must be between 0 and 12")
  
  let result = 1;
  
  for(let i =1; i <= n ; i++){
      result *= i 
    }
  return result 
  
}