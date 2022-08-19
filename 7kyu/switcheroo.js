//Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

//Example:

//'acb' --> 'bca'
//'aabacbaa' --> 'bbabcabb'




//My solution 

function switcheroo(str){
    let strCode = {
      "a" : "b",
      "c" : "c",
      "b" : "a",
      
    }
    //we have an empty string to have the loop enter the following sequence
    let sequence = ''
    //our loop that will add the sequence and reverse
    for( let i= 0; i < str.length; i++){
      sequence += strCode[str[i]];
  
    }
    return sequence
  
  }