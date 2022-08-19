
// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW



//My solution

function toAcronym(str){
    //split the string into smaller strings 
    let split = str.split(' ');
    //set variable to call when needed 
    //taking the map method to bring the first letter and uppercasing it followed by joining them
    let final = split.map( w => w[0].toUpperCase()).join('')
    
    return final
    
    
  }
