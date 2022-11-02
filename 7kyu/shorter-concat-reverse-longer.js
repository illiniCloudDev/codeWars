// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// My solution

function shorter_reverse_longer(a,b){
    //compare the lengths of a and b 
    //
    if (a.length>b.length){
      return `${b}${a.split('').reverse().join('')}${b}`}
    if (a.length<b.length){
      return `${a}${b.split('').reverse().join('')}${a}`}
    
      return `${b}${a.split('').reverse().join('')}${b}`
  }
