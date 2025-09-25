//coding challenge

// In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

// If a letter is a upper case consonants, replace that character with "Iron".
// If a letter is a lower case consonants or a non-alpha character, do nothing to that character
// If a letter is a upper case vowel, replace that character with "Iron Yard".
// If a letter is a lower case vowel, replace that character with "Yard".

//Solution

function tiyFizzBuzz(sentence){
  //Params - a string with either upper or lower case
  //Return string that meets the criteria 
  //Example 
  //Pseudo code 

  
  let result = '';
  let upperCaseVowels = 'AEIOU';
  let lowerCaseVowels = 'aeiou';
  
  for(let i = 0; i < sentence.length; i++){
    
    const char = sentence[i]
    
    if(upperCaseVowels.includes(char)){
      result += 'Iron Yard'
    }else if(lowerCaseVowels.includes(char) ){
      result += 'Yard'
    }else if( char.toUpperCase() === char && /[A-Z]/.test(char)){
      result += 'Iron';
    }else{
      result += char;
    }
    
  }


  return result;
}