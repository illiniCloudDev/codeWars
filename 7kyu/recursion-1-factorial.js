// This is a kata series that you can only solve using recursion.
// ##1 - Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.


//Solution + my alt solotion 
const factorial = n => 
 n < 1 ? 1 : n * factorial( n -1) 



//  const factorial = n => {
//   if( n === 0){
//     return 1
//   }
// //make n into an array 
// let arr =  []
// for(let i = 1; i <=  n; i++) {
//   arr.push(i)
  
// }
// console.log(arr) 
   
// const initialValue = 1;
// const sumWithInitial = arr.reduce(
//   (previousValue, currentValue) => previousValue * currentValue,
//   initialValue
//   );
//  return sumWithInitial
// };