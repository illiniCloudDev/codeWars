//challenge
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Examples:
// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

// solution 
function divisors(integer) {
  //PARAMATERS
  //RETURNS
  //EXAMPLES
  //PSEUDO CODE 
  
  //we need to run a loop to bring all numbers
  //use filter method to remove the integer and 1
  //run a conditional on the result array to determine the prime first 
  //other code will be in else 

  
  let result = [];
  
  for(let i = 0; i <= integer; i++){
    if( integer % i === 0){
      result.push(i)
    }
  }
  let arrayWithoutOne = result.filter( number => !(number === 1 || number === integer) ? true : false )
  
  if(arrayWithoutOne.length === 0){
    return `${integer} is prime`;
  }else{
    return arrayWithoutOne
  }
  
}