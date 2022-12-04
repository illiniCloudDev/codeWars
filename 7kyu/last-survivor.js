// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

//My solution 
function lastSurvivor(str, arr) {
    if( arr == 0){
      return str
    }
    //we need to make the str into an array as well to match the indexs 
    let strArr = str.split('') //      ['a','b','c']
    
    for(let i = 0; i < arr.length; i++){
      strArr.splice(arr[i] , 1)
    }
   console.log(strArr.join('').toString())
   return strArr.join('').toString()
  //   console.log(arr)
  }