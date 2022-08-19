// Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.


//My solution
function findShort(s){
    let strArr = s.split(' ');
    //we now have an array of strings. 
    //we can use the min funtion or we can use sort
    strArr.sort((a, b) => a.length - b.length);
    //length is important here as we need the actual number of how long 
    return strArr[0].length
    
  }