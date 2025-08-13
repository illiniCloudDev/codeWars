//challenge

// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1


//solution
function leastLarger(a, i) {
    //the selected comparison
    const targetVal = a[i]
    //the array of all values that are greater than the target value
    const largerVals = a.filter(num => num > targetVal)
    //the selection of smallest value of the array
    const leastLargeVal = Math.min(...largerVals)
    
    //findIndex() method helps with returning -1 if the result in not found 
    //comparing the smallest value within the array
    return a.findIndex(num => num === leastLargeVal)
}