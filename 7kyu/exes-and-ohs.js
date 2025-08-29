//coding challenge

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//solution

function XO(str) {
  //Paramaters it's a string
  //Return true or false a boolean
  //Examples if number of x equals the number of o
  //Pseudo code 
  
  //split the string
  //categorize the letters 
  //pull the numbers for letters
  //compare the numbers
  //if equal, return true
  //else false 
  
  let strSplit = str.split('').map( x => x.toLowerCase());
  
  
  let numOfX = [];
  let numOfO = [];
  
  for(let i = 0; i < strSplit.length; i++){
    if( strSplit[i] === 'x' ){
      numOfX.push(strSplit[i]);
    }else if( strSplit[i] === 'o'){
      numOfO.push(strSplit[i]);
    };
  };

  return numOfX.length === numOfO.length ? true : false; 
  
}