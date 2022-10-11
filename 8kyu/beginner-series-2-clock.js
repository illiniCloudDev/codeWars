// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

//My solution

function past(h, m, s){
   
    let standard = 1000
    
    let a = h * 60 * 60 * standard 
    
    let b = m * 60 * standard
    
    let c = s * standard
    
    let finalResult = a + b + c
    
    return finalResult 
  }