// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)


//My solution 

const solution = (start, finish, difference = finish - start) => 
Math.floor(difference / 3) + difference % 3 