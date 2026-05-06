//coding challenge
// Below is a right-angled triangle:

//   |\
//   | \
//   |  \
//   |   \ 
// o |    \ h 
//   |     \
//   |    θ \
//   |_______\ 
//      a
// Your challange is to write a function that calculates the angle θ in degrees. You will be given three arguments representing each side: o, h and a. One of the arguments equals zero. Use the length of the two other sides to calculate θ.

// Round the result to the nearest integer, except in C and JavaScript.

//solution
function missingAngle(h, a, o) {
  
  
  //Params are 3 numbers
  //Return the angle or number
  //Ex
  //Pseudo code
  
  //we need to know the formula for a right triangle 
  //we need to determine which of the three is zero
  //if it's zero do NOT use it
  //else take the remaining and plug them into the formula
  
  //need to use filter to pick the non zero vals
  
  const sides = {h, a, o}
  let present = Object.keys(sides).filter(key => sides[key] !== 0);
  let radians = 0;

  if (present.includes('o') && present.includes('h')) {
    // SOH: sin(θ) = o / h
    radians = Math.asin(sides.o / sides.h);
  } 
  else if (present.includes('a') && present.includes('h')) {
    // CAH: cos(θ) = a / h
    radians = Math.acos(sides.a / sides.h);
  } 
  else if (present.includes('o') && present.includes('a')) {
    // TOA: tan(θ) = o / a
    radians = Math.atan(sides.o / sides.a);
  }

  return radians * (180 / Math.PI);

}