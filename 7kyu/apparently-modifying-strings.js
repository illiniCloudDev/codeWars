//coding challenge


//solution
function apparently(string) {
  
  //Paramater as a string
  //Returning a new string with the included word 'apparently' after every 'and'/'but'
  //E
  //Pseudo code
  
  //split the string
  //can we do two variables to hold the params we're looking for - good for no mistakes
  //we're going to need to do a for loop/foreach? 
  //run a conditional inside the loop
  //make the comparision
  //if found, concate name the word 'apparently'
  //maybe use splice?
  
  let splitStr = string.split(' ');
  let wordAnd = 'and';
  let wordBut = 'but'; 
  
  for(let i = 0; i < splitStr.length; i++){    
    if( (wordAnd === splitStr[i] || wordBut === splitStr[i]) && (splitStr[i+1] !== 'apparently')) {
      splitStr.splice( (i + 1), 0, 'apparently')
      i++
      }
    }
  return splitStr.join(' ')
  
}