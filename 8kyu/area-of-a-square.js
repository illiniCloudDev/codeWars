//coding challenge

//my solution 

function squareArea(A){
  //Parameter is the length of the circular arc
  //Return the area of the square
  //Ex
  //Pseudo code
  
  //find the formula for radius 
  
  let radius = (2*A)/Math.PI
  let area = radius * radius
  
  return Number(area.toFixed(2))
  
  
}