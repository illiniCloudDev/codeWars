//challenge

//Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order

//solution 
let sortArray = function(value) {
  //Params a string of numbers
  //Returns the numbers from small to biggest
  //Examples
  //Pseudo code
  //split the string
  //run a loop to turn them into numbers
  //run the sort method
  //.join()
  
  const nums = value.split('').map(number => {
    return parseInt(number)
  })
  
  return nums.sort((a,b) => a - b ).join('')
}