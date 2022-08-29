// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// examples:

// [2, 10, 9, 3] is a nice array because

//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1

// [4, 2, 3] is a nice array because

// 4 = 3 + 1
// 2 = 3 - 1
// 3 = 2 + 1 (or 3 = 4 - 1)

// [4, 2, 1] is a not a nice array because

// for n = 4, there is neither n - 1 = 3 nor n + 1 = 5

//My solution 
//Review this Kata. has two loops 
function isNice(arr){
    let result = 0,
        length = arr.length
    if(arr[0] != undefined ){
      for(let i = 0; i < length; i++){
        for(let i2= 0; i2 < length; i2++){
          if( arr[i] == arr[i2] + 1 || arr[i] == arr[i2] - 1 ){
            result++
            break
          }
        }
      }
      return result == length 
    }else{
      return false 
    }
  }