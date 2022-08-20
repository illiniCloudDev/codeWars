// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"



//My solution 
function maskify(cc) {

    //we can take the string and turn it into smaller strings
    //set the variable to the array of the small strings
    //take that variable and reverse it 
    //create a function that will take the first four numbers of the array to be left alone or set the loop to start at the 4th index and the 
    //rest of the indexes will be replaced with the #
    //remember to set the return of that function and have it nested in a variable to eventually reverse it again
    
    //we will need conditionals to determine if the string is more than 4 characters
    //if it is not then return the entered value 
    
    let ccArr = cc.split("").map((letter, index) => index < cc.length - 4 ? '#' : letter ).join('');
    return ccArr
}