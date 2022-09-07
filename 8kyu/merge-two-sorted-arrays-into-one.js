// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!


//My solution 
function mergeArrays(arr1, arr2) {
    //create the first and second array 
    //bottom is my attempt at originality
   /* let finalArray = []
   arr1.forEach( element => finalArray.push(element))
   arr2.forEach( element => finalArray.push(element))
    return finalArray.sort ( (a,b) => a-b ) 
    */
    //we stablished the concatnation of arr1 and arr2 
    //we then sorted the order of the concatnated arr1 + arr2
    //our sorted() parameters are x and y and the following is the starting of lowest point to highest point in integer
    //we followed by the new Set() that orders things uniquely 
    //Array.from() method creates a shallow copy 
    return Array.from (new Set (arr1.concat(arr2).sort( (x,y) => x - y)))
  }