//challenge
// Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.

// This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.

// Examples:

// oddOne([2,4,6,7,10]) // => 3
// oddOne([2,16,98,10,13,78]) // => 4
// oddOne([4,-8,98,-12,-7,90,100]) // => 4
// oddOne([2,4,6,8]) // => -1



//solution 
function oddOne(arr) {
  // PREP
  //PARAMETERS - ARRAY
  //RETURNS - -1 OR odd number
  //EXAMPLES 
  //PSEUDO CODE
  
  //use the findIndex() method to return -1 if what requested isn't found OR INDEX 
  //loop
  //if( !number % 2 === 0)
  //return number
  //else 
  //-1
  
  //creates the numbers into positives
  let absArr = arr.map( number =>{
    return Math.abs(Number(number))
  });

  
  return absArr.findIndex(num =>{
    return !(num % 2 === 0 )
  })
  
}