// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


//My solution 
function arrayPlusArray(arr1, arr2) {
    let sumOne = 0 
    let sumTwo = 0
    //create two different loops for creating the toals of each array
    //loop one for sumOne 
    arr1.forEach( x => {
      sumOne += x
    });
    
    arr2.forEach(y => {
      sumTwo += y
    })
    return sumOne + sumTwo; //something went wrong
  }