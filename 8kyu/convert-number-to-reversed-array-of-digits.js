//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//My solution 

function digitize(n) {
    //we take the number and turn it into a string 
    //we split it into an array
    //we reverse that array
    //we run that new array 
    return n.toString().split('').reverse().map(Number);
  }