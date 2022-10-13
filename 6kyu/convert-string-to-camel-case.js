// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


//My solution 


function toCamelCase(str){
  
    let strArray; 
    
    if( str === ''){
      return ''
    }
    //have the string splited 
    //consider both the - and _ for conditionals
    if(str.indexOf('-') !== -1){
      strArray = str.split("-")
    }else{
      strArray = str.split("_")
    }
    
    let string = strArray[0];
    
    for(let i = 1; i < strArray.length; i++){
      string += capitalize( strArray[i]);
    }
    
    return string 
  }
  
  let capitalize = str => {
    return str[0].toUpperCase() + str.slice(1)
  }
