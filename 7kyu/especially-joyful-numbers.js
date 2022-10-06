// Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

// We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.

//My solution 

function numberJoy(n) {
    let sort=(n.toString().split('').map(Number).reduce((a,b)=>a+b,0));
    return n-(sort*sort.toString().split('').reverse().join(''))===0;
   }
   
   
   // function numberJoy(n) {
     
   //    n will equal whatever number has been given 
   //   n will have to be split and then add with one another 
   //   we we will have the sum of n.split
   //   when we have the sum take that number and then create a new var that will use the .reverse method to then multiply it original 
   //   we then must have a conditional in whether or another the variables equal to the given number (n)
   //   if true return 
   //   if false (else)
   //   let phase1 = n.toString()
   //   let phase2 = phase1.split('')
   //   phase 2 is an array of our number example: [1,9,9,7]
   //   create a for loop that will add the sum of the array 
   //   var specialNum = 0;
     
   //   for(var i=0; i < phase2.length; i++){
   
   //     specialNum += parseInt(phase2[i]);
   //   }
   // specialNum is important to either reverse it or test it 
   //   var specialNumReversed = specialNum.toString().split('').reverse().join('') 
   //   var finalNumReversed = parseInt(specialNumReversed)
   //   I want to add an object where the given number will automatically become true 
     
     
   //   if( n === 1 || 2 || 3|| 4 || 5 || 6 || 7 || 8 || 9 || 10 || 12 ){
   //     return true
       
   //   }else if ( n === specialNumReversed * finalNumReversed ) {
   //     return true
       
   //   }else{
   //     return false
   //   }
       
     
   // }