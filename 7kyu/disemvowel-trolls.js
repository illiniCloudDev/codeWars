// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//My solution 

function disemvowel(str) {
    //take all letters and make them lowercase
  
    let letters = str.split('')
  
    let vowels =  [ 'a','e','i','o','u']
    
    let ph1 = letters.filter(el => vowels.indexOf(el.toLowerCase()) == -1)
    let final = ph1.join('')
    return final
    //create a conditional that says return elements that are not equal to a,e,i,o,u
  //   for( let i = 0; i < str.length; i++){
  //     result.push( i !== 'a' || 'e'  || 'i'  || 'o'  || 'u')
  //   }
  //   console.log(result)
  
  
  }