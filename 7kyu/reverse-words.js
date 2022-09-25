// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


//My solution 

function reverseWords(str) {
    let result = []
    let phase1 = str.split('').reverse().join('')
    let phase2 = phase1.split(' ')
    for( let i = 0; i < phase2.length; i++){
      result.unshift(phase2[i])
    }
    return result.join(' ')
  }