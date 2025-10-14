//coding challenge
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"



//solution
function maskify(cc) {
  //Params - a string of numbers
  //Return the last 4 numbers of the string
  //Examples  "64607935616" -->      "#######5616"
  //Pseudo code
  
  //i'm thinking of using .splice() method to make the iteration
  //or a for loop that goes the length -5
  //replace all numbers except last four
  //.join()
  
  const ccSplit = cc.split('')
  console.log(ccSplit)
  
  if(cc.length <= 1){
    return cc
  }else{
    for(let i= 0; i <= ccSplit.length - 5; i++){
      ccSplit[i] = '#'
    }    
  }
  return ccSplit.join('')
}
