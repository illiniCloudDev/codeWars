//coding challenge
// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.


//attempted solution

function reduce(fraction) {
  // 0 to that number 
  //find me all the numbers that divide into that number equally - place into an array
  //once found run a loop that picks the smallest one or do a sort and pick the first element
  //once found push it to the new array
  //fraction[0] and fraction[1]
  
  let comparisonNumberOfFraction = (fraction[0] / fraction[1])
  
  let numeratorResults = [];
  
  let denominatorResults = [];
  
  let finalResult = [];
  
  for(let i = 0; i <= fraction[0]; i++){
    if( fraction[0] % i === 0){
      numeratorResults.push(i)
    }
  }
  for(let i = 0; i <= fraction[1]; i++){
    if( fraction[1] % i === 0){
      denominatorResults.push(i)
    }
  }  
  
  let numeratorSorted = numeratorResults.sort((a,b) => a - b);
  let denominatorSorted = denominatorResults.sort((a,b) => a - b);
  
  
  //comparison to both arrays
  for(let i = 0; i < numeratorSorted.length; i++ ){
    if( (numeratorResults[i]/denominatorResults[i] ) == comparisonNumberOfFraction ){
      finalResult.push(numeratorResults[i])
      finalResult.push(denominatorResults[i])
    }
    
  }
  return finalResult
  
}