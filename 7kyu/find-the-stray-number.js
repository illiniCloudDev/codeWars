// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers) {
    //we need to see which number is greatest or most of 
    //therefore eliminate that one and choose the alternate 
    // 
  //   let result = []
  //   let answer = []
  //   for( let i = 0; i < numbers.length; i++){
  // //     console.log(numbers[i])
  //     if(numbers[0] === numbers[i]){
  //       result.push(i)
  //     }else {
  //       answer.push(i)
  //     }
  //   }
  //   const final = result.length > answer.length ? answer[0] : result[0];
  //   console.log(result)
  //   console.log(answer)
  //   return final
    //it is a good approach to sort the array of numbers to have the first set of numbers or numbers to compare to the rest 
    let arr = numbers.sort();
    if (arr[0] !== arr[1]) {
      return arr[0];
    } else {
      return arr[arr.length - 1];
    }
    //return the number that doesn't match
  }