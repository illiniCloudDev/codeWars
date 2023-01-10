// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//My solution

function problem(x){
    if (typeof x === 'string'){
      return "Error"
    } 
   else {
     return  6 + (x * 50)
   }
 }

 // we are taking our parameter of x and are running it through a conditional
 //the conditional includes typeof operator which determines what type of value is the parameter
 // if it is a string - the type , the it will spit "Error" as a string done by me
 //if it is not, then it will execute the function 