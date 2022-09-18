// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW

//My solution 

const toAcronym = inp => 
  //split the string
  //push it to a new array
  //uppercase it
  //join it
  inp.split(' ').map( x => x[0].toUpperCase()).join('')