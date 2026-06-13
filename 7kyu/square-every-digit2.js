function squareDigits(num){
  //Params a stack of numbers / sequence of numbers
  //Return a number
  //Example
  //Pseudo code
  //split the numbers
  //do they become integers after?
  //if so, then use map() to iterate through each number and use the Math.pow(x, 2)
  //create a variable to hold the concatnation
  //return the variable with Number() method
  
  let integers = num.toString().split('');
  let total = '';
  
  let integersToStr = integers.map((int, index) => {
    let temp = Number(int);
    let square = Math.pow(temp, 2).toString();
    total += square
    

    
  });
  
  return Number(total)
  
}