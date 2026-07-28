function  calculateAge(yb, yearcount) {
  
  //Paramters year of birth, year to count
  //Return a string with a template literal
  //Example 'you are .. years old.'
  //Pseudo code
  
  //create the params
  //create a variable to hold the difference
  //create if and else if 
  //if it is equal then ...
  //else 
  //use Number(x) inside th variable that deals the difference
  //if yb < yearcount then do math.abs
  // if yearcount < yb then say this 'you will be born in x year'
  
  let product = Math.abs(yb - yearcount);
  
  if( yb === yearcount){
    return 'You were born this very year!'
  }else if(yb < yearcount){
    if(product > 1){
      return `You are ${product} years old.`
    }else{
      return `You are ${product} year old.`
    }
    
  }else{
    if(product > 1){
      return `You will be born in ${product} years.`
    }else{
      return `You will be born in ${product} year.`
    }
  }

}

