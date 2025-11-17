//coding challenge
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//my solution
function getCount(str) {
  let vowels = 'aeiou'
  str.split('')
  let count = 0;
  
  for(let i = 0 ; i < str.length; i++){
    for(let j=0; j < vowels.length; j++){
      if(str[i] === vowels[j]){
        count += 1
      }
    }
  }
  return count
}