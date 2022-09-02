// Get the next prime number!

// You will get a numbern (>= 0) and your task is to find the next prime number.

// Make sure to optimize your code: there will numbers tested up to about 10^12.

// Examples
// 5   =>  7
// 12  =>  1


//My solution 

function nextPrime(n){
    if(++n < 2){
      return 2 
    }
    for( let i = 2; i<= Math.sqrt(n); i++){
      if( n % i == 0){
         return nextPrime(n)
      }
    }
    return n
  }
