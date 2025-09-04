//coding challenge
// In this kata you will be given an array of the dimensions of rectangles (array with width and length) and circles (radius - just a number). Your task is to sort the objects by their area in ascending order and return the sorted array of areas.

// Examples
//    [ [4.23, 6.43], 1.23,   3.444,  [1.342, 3.212] ] 
// // [ rectangle,   circle,  circle,   rectangle    ]
// --->
// [ 4.31, 4.75, 27.2, 37.26 ]



//solution
function sortByArea(array) {
  array = array.map(x => typeof x == 'object' ? x[0] * x[1] : Math.PI * x * x)
  array = array.map(x => parseFloat(x.toFixed(2)))
  return array.sort((a, b) => a - b);
}