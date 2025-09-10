//challenge 
// Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

// A few examples:

// randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

// randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
// Notes:

// This function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.

// The letters MUST be selected randomly - filters are set to make sure there is no cheatin



//solution
function randomCase(x) {
  //Params is a string 
  //Return a random lower or upper letter variation
  //Example
  //Pseudo code
  
  //split the string 
  //push the string to a new array? 
  //create a for loop that will iterate through the entire array
  //create a random binary to either upper or lower case
  //push the final product to an empty array
  //return the array
  
  let initial = x.toLowerCase().split('');
  let finalProduct = []
  for(let i = 0; i < x.length; i++){
    if(initial[i]){
      let randomNum = Math.random()
      if(randomNum > .5){
        finalProduct.push(initial[i].toUpperCase())
      }else{
        finalProduct.push(initial[i])
      }
      
    }
  };
  return finalProduct.join('')
}