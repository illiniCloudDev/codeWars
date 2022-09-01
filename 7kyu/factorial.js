

//My solution

function factorial(n){
    //this part of throw new RangeError requires more study
    if (n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12')
    let result = 1
    for( let i = 1; i <= n; i++){
      result *= i
    }
    return result 
  }