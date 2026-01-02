//coding challenge
//Seven is a hungry number and its favourite food is number 9. Whenever it spots 9 through the hoops of 8, it eats it! Well, not anymore, because you are going to help the 9 by locating that particular sequence (7,8,9) in an array of digits and tell 7 to come after 9 instead. Seven "ate" nine, no more! (If 9 is not in danger, just return the same array)

//solution
function hungrySeven(arr){

  //Param is an array of numbers
  //Return a new array with 7 after 9
  //Example 
  //Pseudo code
  
  //locate the sequence 7,8,9 
  //if true, move 7 after 9
  // do we need a shallow copy? 
  //need to loop through the array, we don't know how many times

  
  let changed = true
  
  while(changed){
    
    changed = false
      
    for(let i =0; i < arr.length - 2; i++){
      if( arr[i] === 7 && arr[i+1] === 8 && arr[i+2] === 9){
        arr[i] = 8;
        arr[i+1] = 9;
        arr[i+2] = 7;
        changed = true
      };
    };
  }
  
  
  return arr
}
