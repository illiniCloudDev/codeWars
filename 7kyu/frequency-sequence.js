//Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"

//My solution
function freqSeq(str, sep) {
    return [...str].map(char => str.split(char).length - 1).join(sep)
  }
  
  
  //string is made into an array using spreadoperator
  //using .map() method to take the array