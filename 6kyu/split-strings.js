// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


//My solution 

function solution(str){
    //this is good
  //    let strSplit = str.split('')
     
     //we not need to create the pairing of twos 
     //we need to take the strSplit array an push them into pairs of two to a new 
     let newArr = []
     if( str.length % 2 !== 0){
       str += "_"
     }
     for( let i = 0; i < str.length; i+= 2 ){
       newArr.push(str[i] + str[i + 1])
     }
   return newArr 
  }