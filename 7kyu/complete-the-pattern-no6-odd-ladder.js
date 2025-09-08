//challenge

// You have to write a function which creates the following odd-numbers staircase pattern up to the desired number of rows.

// If the input is <= 0, return an empty string
// If the input is even, round it down to the odd number that precedes it.
// There are no spaces in the pattern
// The lines are separated by a newline character (\n)
// Examples:
// pattern(9):

// 1
// 333
// 55555
// 7777777
// 999999999

//solution
function pattern(n){

  //Params n = the number 
  //Return a pattern with odd numbers
  //Examples 1,3,5...
  //Pseudo code 
  
  //conditional if the input is <= 0 
  //have a loop that will get all odd numbers from the input 
  //use modulus to get the odd numbers
  //do another for loop for the array 
  
  if(n <= 0 ){
    return ''
  }else{
    let array = [];
        
    for(let i = 0; i <= n; i++){
      if( !(i % 2 === 0)){
        array.push(i)
      }
    };
   
    let string = '';  
    
    for(const num of array){
      for(let j = 0; j < num; j++){
        string += num
      }
      string += '\n'
    }
    
    return string.trim()
    
  }
}