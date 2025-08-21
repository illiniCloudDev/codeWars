//coding challenge

// Your computer has forgotten how to speak ASCII! (or Unicode, whatever) It can only communicate in binary, and it has something important to tell you. Write a function which will receive a long string of binary code and convert it to a string. Remember, in Python binary output starts with '0b'.

// As an example: binary_to_string('0b10000110b11000010b1110100') == 'Cat'

// Input may consist of upper and lower case letters and numbers, in binary form of course, as well as special symbols. The input to your function will always be one string of binary.

//solution


// String.fromCharCode()
//this is imporant as it takes the numbers into unicode values - example 67 turns into 'C' 

//... spread operator to iterate through every element of the binary array
//.split() with /(?=0b)/ the delimiter / / marks the beginning and end 
//?= stands for a "positive lookahead" checks for a certain pattern inside the string
// 0b is the actual seperator 
const binaryToString = binary => String.fromCharCode( ...binary.split(/(?=0b)/).map(Number) ) ;