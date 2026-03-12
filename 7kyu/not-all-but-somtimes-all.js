// coding challenge
// function remove(str, what)
// that takes in a string str(text in Python) and an object/hash/dict/Dictionary what and returns a string with the chars removed in what. For example:

// remove('this is a string',{'t':1, 'i':2}) === 'hs s a string'
// // remove from 'this is a string' the first 1 't' and the first 2 i's.
// remove('hello world',{'x':5, 'i':2}) === 'hello world'
// // there are no x's or i's, so nothing gets removed
// remove('apples and bananas',{'a':50, 'n':1}) === 'pples d bnns'
// // we don't have 50 a's, so just remove it till we hit end of string.

//solution

function remove(str, what) {
  //Parameters - string and object with key/value pairs
  //Return a modified string 
  //Example
  //Pseudo code 
  
  //make the object into an array using object.key()
  //for loop to make the removal
  //splice method to remove the specific letter
  //split() metho don str to make it into an array
  
  let strArr = str.split('');

  //for in loop to loop through the object 
  for(let char in what){

    //gets the value/number of times from the key/char
    let timesToRemove = what[char];
    
    for(let i = 0; i < timesToRemove; i++){
        let index = strArr.indexOf(char);
        
        if(index !== -1){
          strArr.splice(index, 1);
        }else{
            break;
        }
    }
  }
  return strArr.join('')
  
}
