//coding challengeYour task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// my solution

function multiplicationTable(size) {
  
  //Params is a number
  //Return an array that contains arrays
  //Example 
  //Pseudo code
  
  //we take the number and make a table 
  //size x size -> 3x3
  //we create a nested loop 
  //we may need a container 
  
  let container = []
  let sizeNumbers = []
  
  for(let i =1; i <= size; i++){
    sizeNumbers.push(i)
  };
  
  for(let i =0; i < size; i++ ){
    let miniArr = []
    for(let j= 0; j < size; j++){
      let product = sizeNumbers[i] * sizeNumbers[j];
      miniArr.push(product)
    };
      container.push(miniArr)

  };
  return container
}
