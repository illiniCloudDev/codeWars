// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased) 

//solution ****

function sillycase(silly) {
    //variable to round 
    let roundedNumber = Math.round(silly.length / 2);

    //adding the first and second halfs
    //slice method meant for strings - concatnate the two strings 
    return silly.slice(0, roundedNumber).toLowerCase() + silly.slice(roundedNumber).toUpperCase();
}