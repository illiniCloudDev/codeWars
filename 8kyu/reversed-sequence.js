// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


//My solution 

const reverseSeq = n => {
    //we need to take the number (the parameter )and create an array from it 
      //we would need a loop in order to dissect the number to an array 
      const result = [];
    
      for(let i = n; i > 0; i -= 1) {
      result.push(i);
    }
      return result;
  };