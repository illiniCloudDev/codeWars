//You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


//My solution 

function twoSort(s) {
    //we take the array and sort it and take the first element
    //we then split the first element string and apply *** to the elements in between
    return s.sort()[0].split('').join('***');
  }