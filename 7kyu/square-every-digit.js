// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


//My solution
function squareDigits(num){
    if( num === 0){
      return 0
    }
    //we need to seperate the number into an array 
    //phase 1 is a string 
    let phase1 = num.toString() 
    //phase 2 is an array of strings
    let phase2 = phase1.split('')
    //we then need to add the Number method to the strings while pushing them into an array 
    
    let phase3 = phase2.map( i => Number(i))
    
    let result = []
    //we will need a loop that will use the Math.pow to create a new array with the squared attribute
    let phase4 = phase3.map( i => Math.pow(i, 2))
    return Number(phase4.join(''))
  }