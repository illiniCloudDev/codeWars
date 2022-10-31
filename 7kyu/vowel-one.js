// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" )  "1001110"

// vowelOne( "aeiou, abc" )  "1111100100"

//My solution

function vowelOne(s){
    //vowels become 1s
    //everything else is a zero
    //for loop to replace the letters?
    //split the string to make things easy
    //
  return s.replace(/./g,v=>/[aeiou]/i.test(v)?'1':'0')
    
  //   let arrOfStr = s.split("")
  //   let result = []
    
  //   arrOfStr.forEach( (el) =>{
  //     if( el === "a" || "e" || "i" || "o" || "u" ){
  //       result.push("1")
  //     }else{
  //       result.push("0")
  //     }
  //   })
    
  
    
  }