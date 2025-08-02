//challenge
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.



//solution
function sumMix(x){
  
  const arrayAllNums = x.map((element) => Number(element)).reduce((accum, currentVal) => accum + currentVal, 0)
  
  return arrayAllNums

}