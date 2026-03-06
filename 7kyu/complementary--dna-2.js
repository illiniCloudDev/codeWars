//coding challenge

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna){
  
  //P a string
  //Return the complimentary STRING
  //Ex 
  //Pseudo code
  
  //create an object with the key pairs
  //split the dna string into an array
  //run a loop to compare the value of the object with the array
  //push elements to empty array
  //return with .join()
  let keyString = [];
  
  const dnaKeys = {
    'A':'T',
    'T':'A',
    'C':'G',
    'G':'C'
  }
  dna.split('')

  for(let i =0; i < dna.length; i++){
    if(dna[i] === 'A'){
      keyString.push(dnaKeys.A)
    }else if(dna[i] === 'T'){
      keyString.push(dnaKeys.T)
    }else if(dna[i] === 'C'){
      keyString.push(dnaKeys.C)
    }else if(dna[i] === 'G'){
      keyString.push(dnaKeys.G)
    }
  }
  
  return keyString.join('')
}