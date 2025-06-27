// Problem
// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

//Solution 

function isPalindrome(x) {
  
  let reversed = x.split('').reverse().join('').toLowerCase()
  
  let copyOfX = x.toLowerCase()
  
  if( copyOfX === reversed){
    return true
  }else{
    return false
  }

}