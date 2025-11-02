//A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

// Making a digital chessboard I think is an interesting way of visualising how loops can work together.

// Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

// So, for rows = 6 and columns = 4, should return an array like this:

// [
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"]
// ]
// And for rows = 3 and columns = 7, should return this:

// [
//     ["O","X","O","X","O","X","O"],
//     ["X","O","X","O","X","O","X"],
//     ["O","X","O","X","O","X","O"]
// ]
// The white spaces should be represented by an: 'O'

// and the black an: 'X'

// The first row should always start with a white space 'O'
//attempt 
function chessBoard(rows, columns) {
  
  //P two integers - rows and columns 
  //Return a an array of arrays - that display strings or either x or o
  //E
  //Psesudo code
  
  //this is an array of arrays
  //each array starts either with x or o 
  //every array begins with o 
  
  let containerArray = [];
  let numberOfArrays = rows; 
  let numberOfIndexes = columns - 1;
  
  //create the arrays into the containerArray
  
  for(let i = 0; i < rows; i++){
    containerArray.push([])
  }
  console.log(rows)
  console.log(containerArray)
  //do a forEach loop to bring the containerArray
  //we need a sequence that will either take "X" or "O"
  for(let i= 0; i < rows; i++){
    //assign the first array in the first element as '0'
    containerArray[0[0]] += 'O';
    let spaceChoices = {'O': 'O', 'X': 'X' }
    
  }
  
}

//the actual answer 
function chessBoard(rows, columns) {
let arrContainer = []
for (let i = 0; i < rows ; i ++) {
    let arr = []
    for(let j = 0; j < columns; j++){ 
    if ((i + j) % 2) {
        arr.push('X')
    } else {
      arr.push('O')
    }}
   arrContainer.push(arr)
}
  return arrContainer
}