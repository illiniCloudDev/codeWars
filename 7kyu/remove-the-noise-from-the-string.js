//coding challenge
//We have a broken message machine that introduces noise to our incoming messages. We know that our messages can't be written using %$&/#·@|º\ª. Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message.

// Your mission is to write a function which removes this noise from the message.

// Notice that noise can only be %$&/#·@|º\ª characters, other characters are not considered to be noise

// For example:

// removeNoise("h%e&·%$·llo w&%or&$l·$%d")
// returns hello world


//solution
function removeNoise(str){
  //Param is a string 
  //Return a string without the mentioned characters
  //Example 
  //Pseudo code
  
  //define the characters
  //iterate through the string
  //if characters exist in the string, remove them
  //join the array
  //return the string
  
    let characters = '%$&/#·@|º\\ª';
  
  let result = [];

  for (let i = 0; i < str.length; i++) {
    // Check if the current character is NOT in the noise string
    if (!noise.includes(str[i])) {
      result.push(str[i]);
    }
  }

  return result.join('');

}