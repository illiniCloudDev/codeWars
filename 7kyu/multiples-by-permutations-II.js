//We have two consecutive integers k1 and k2, k2 = k1 + 1

//We need to calculate the lowest strictly positive integer n, such that: the values nk1 and nk2 have the same digits but in different order.
//Your task is to prepare a function that will receive the value of k and outputs the value of n.

//The examples given above will be:

// k1 = 325
// k2 = 326
// n = 477
// #Because 477 * 325 = 155025
// and      477 * 326 = 155502

//My solution

function findLowestInt(k1) {
    let k2 = k1 + 1
    let result = 1
    let sort = (k,r) => [...String(k * r) ].sort().join('')
    while(true) {
      if( sort(k1, result) == sort(k2, result++)){
        return result - 1
      }
    }
}