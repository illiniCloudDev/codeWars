//coding challenge
// You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

// Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

//solution 
function oddBall(arr){
  //Params is an array, with strings that are in even or odd count
  //Return true or false
  //Example
  //Pseudo 
  
  
  //console.log(arr)
  //create a new array that takes in all numbers
  //then run another loop or forEach that will compare the index where we see 'odd'
  let arrOfNums = [];
  
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'number'){
      arrOfNums.push(arr[i])
    }
  }
  //identify the index of the word 'odd'
  const indexOfOdd = arr.findIndex( item => item == 'odd')
  //console.log(arrOfNums)
  return arrOfNums.includes(indexOfOdd)
}