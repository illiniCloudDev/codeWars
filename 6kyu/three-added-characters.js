//coding challenge
// Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

// Write a function that returns the added character

// You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

// Examples
// string1 = "hello"
// string2 = "aaahello"
// => 'a'

// string1 = "abcde"
// string2 = "2db2a2ec"
// => '2'

// string1 = "aabbcc"
// string2 = "aacccbbcc"
// => 'c'

//solution


function addedChar(s1, s2){
  //Params - string1 and string2
  //Return the added characters - 1 character as a string
  //Example 'c' '2'   
  //Pseudo code
  
  //we'll need to run a loop 
  //split both strings using .split() method
  //run a loop to compare each character
  //conditional 

  //return the variable using array[0]
  
  const s1Split = s1.split('');
  const s2Split = s2.split('');
  
  
  for(let i = 0; i < s1.length; i++){
    let index = s2Split.indexOf(s1Split[i])
    if( index !== -1 ){
      s2Split.splice(index, 1)
    }
  }

  return s2Split[0]
}
