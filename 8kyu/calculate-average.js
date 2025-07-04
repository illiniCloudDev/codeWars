//Coding Challenge 
// 
// // Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

//solution
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }else {
    let average = 0;
  for(let i = 0; i < array.length; i++) {
    average += array[i];
  }
  
  return average / array.length;
  }
  
}