// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false




//solution

function solution(str, str2){
  //P str and possible ending string
  //R either true or false
  //E
  //P
  //we need to compare the first arg to the second 
  //but only for the ending of the first arg
  //check for conditionals if str matches str2
  
  const copyOfStr = str.slice(1, str.length)
  //const containsResult = copyOfStr.contains(`{str2}`)
  console.log(copyOfStr)
  console.log(str)
  console.log(str2)
  if(str == str2){
    return true
  }else{
    if(containsResult){
      return true
    }else{
      return false
    }
  };
  
}