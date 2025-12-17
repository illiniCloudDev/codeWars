// problem

//solution
function disemvowel(str) {
  //param is a string
  //return the string without vowels
  //example
  //"This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"
  //pseudo code
  //create a variable to hold the vowels
  //split the string into an array of characters
  //filter the array to remove the vowels
  //join the array back into a string
  //return the string 

  let vowels = ['a','e','i','o','u','A','E','I','O','U'];
  
  let strSplit = str.split('');
  
  return strSplit.filter( char => !vowels.includes(char)).join('')
}