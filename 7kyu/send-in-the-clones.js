

//coding challenge 
// Every time they sleep they wake up with decreased ability - they get slower... they get dumber... they are only able to solve 1 less Kata than they could the previous day.

// For example, if they can solve 10 Kata today, then tomorrow they can solve only 9 Kata, then 8, 7, 6... Eventually they can't do much more than sit around all day playing video games.

// And (unlike me), when the clone cannot solve any more Kata they are no longer clever enough to operate the clone machine either!

// The Return Home
// I suspected something was wrong when I noticed my Codewars honour had stopped rising.

// I made a hasty return home...

// ...and found 100s of clones scattered through the house. Mostly they sit harmlessly mumbling to themselves. The largest group have made a kind of nest in my loungeroom where they sit catatonic in front of the PlayStation.

// The whole place needs fumigating.

// The fridge and pantry are empty.

// And I can't find the cat.

// Kata Task
// Write a method to predict the final outcome where:

// Input:

// kata-per-day is the number of Kata I can solve per day
// Output:

// [number-of-clones, number-of-kata-solved-by-clones]


//solution 
var clonewars = function(kataPerDay) {



  
  //[1,2,3,4,5]
  //then reverse them to use them in another for loop to multiply 
  
  if(kataPerDay === 1){
    return [1,1]
  }else if(kataPerDay < 1){
    return [1,0]
    
  }else{
      
  let iterationsInNumbers = [];
  
  for( let i = 1; i <= kataPerDay; i++){
    iterationsInNumbers.push(i)
  };
    
  let arrayOfExp = [];
    
  for(let i = 0; i <= kataPerDay - 1; i++ ){
      const result = Math.pow(2, i);
    
      arrayOfExp.push(result)
    };
    
  
  let numberOfClones = 2 ** (kataPerDay - 1) 
  
  let sumOfAllKata = 0;
  let reversedNums = iterationsInNumbers.reverse()
  
  for(let i = 0; i < kataPerDay; i++){
    sumOfAllKata += (reversedNums[i] * arrayOfExp[i])
  };
    
  return [numberOfClones,sumOfAllKata]
  };
  
  }