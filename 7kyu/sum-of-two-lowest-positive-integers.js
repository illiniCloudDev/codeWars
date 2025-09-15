//challenge
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//solution
function sumTwoSmallestNumbers(numbers) {  

  //Params are an array of numbers 
  //Return a sum of two numbers
  //Example 
  //Pseudo code
  
  //categorize the array from lowest to highest 

  //return the sum of both vars
  
  let sortedNums = numbers.sort((a,b)=> a -b )
  return sortedNums[0] + sortedNums[1]
}