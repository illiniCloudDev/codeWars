// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string


//My solution plus the easy solution

const reverseLetter = str => 
[...str.replace(/[^a-z]/gi, '')].reverse().join('')
  //first into an array 
// let strArr = str.split('')

 //let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//filter the array w the non alphabet 
//  let finalStr = strArr.filter(el => alphabet.indexOf(el == -1))
 
//  let answer = finalStr.reverse().join('')
//  console.log(answer)
//  return answer
 