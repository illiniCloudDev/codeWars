//coding challenge

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]




//solution 
function divisibleBy(arr, d){
  
  let answer = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % d === 0){
      answer.push(arr[i])
    }
  }
  return answer

}