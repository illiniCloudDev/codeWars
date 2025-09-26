//coding challenge

// You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

// For example:

// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'


// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'


// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'
// If the feeling can be formed once - plus one to the answer.

// If the feeling can be formed several times from different letters - plus one to the answer.

// Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.

//solution 
//first attempt 

function countFeelings(string, array) {
  //Params - a string and an array
  //Return - a template literal with the number of feelings as a string ``
  //Example '1 feeling.' // 'grief'
  //Pseudo code
  
  //run a for loop for the number of array length
  //use the includes() method to determine the array item is inside the string
  //have conditionals for the sitution of no items, 1 item, and several
  //have empty array variable to store the feelings
  //push the array items into the empty array to count the number of those feelings
  //
  
  let arrayOfFeelings = [];
  
  for(let i =0; i < array.length; i++){
    
    if(string.includes(array[i])){
      arrayOfFeelings.push(array[i])      
    }
  };
  console.log(string)
  console.log(array)
  console.log(arrayOfFeelings)
  
  if(arrayOfFeelings.length === 0){
    return `0 feelings.`
  }else if(arrayOfFeelings.length === 1){
    return `1 feeling.`
  }else if( arrayOfFeelings.length > 1 ){
    return `${arrayOfFeelings.length} feelings.`
  }
  
  
  
}