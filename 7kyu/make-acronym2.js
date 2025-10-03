//challenge
// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW


//solution

function toAcronym(inp){

  //Params a string with multiple words
  //Return a string that has all uppercase letters
  //Example code wars > CW
  //Pseudo code
  
  //split the string 
  //run a loop that takes the first index of each letter 
  //push it to an empty array
  //return the array with .join('').toUpperCase()
  
  let strSplit = inp.split(' ');
  let finalProduct = []
  
  for(let i=0; i < strSplit.length; i++){
    finalProduct.push(strSplit[i][0])
  }
  return finalProduct.join('').toUpperCase()
}