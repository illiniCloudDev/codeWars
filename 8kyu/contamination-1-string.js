// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

//Solution

contamination = (text, char) => char.repeat(text.length)

// We set the function as contamination 
//our paramaters are text and character. 
//we created it into the arrow function
//we selected our parameter of character and include the repeat method that includes
// the text param and include the lenght method 
//within the repeat method we have the number which equates to the text in length i.e the text of orange which equals to 6 bc text length is 6