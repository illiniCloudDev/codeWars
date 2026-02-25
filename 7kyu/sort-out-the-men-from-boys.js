//coding challenge

//Now that the competition gets tough it will Sort out the men from the boys .
//Men are the Even numbers and Boys are the odd
//Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys
//Return an array/list where Even numbers come first then odds
// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists .


//solution 
function menFromBoys(arr){
  //P array of numbers
  //Rreturn an array
  //E
  //P
  
  //fun a loop to create two sets of arrays
  //even and odd arrays
  //even = men - odd = boys
  //then catergorize the even array in ascending order
  //categorize the odd array in descending order
  //join both arrays
  
  let newArr = [...new Set(arr)]; 
  let evenArr = [];
  let oddArr = [];
  
  for(let i = 0; i < newArr.length; i++){
    if( newArr[i] % 2 === 0 ){
      evenArr.push(newArr[i])
    }else{
      oddArr.push(newArr[i])
    }
  }
  //even to ascending 
  evenArr.sort((a,b) => {return a- b});
  //odd to descending 
  oddArr.sort((a,b) => {return b -a});
  
  return [...evenArr, ...oddArr]
  
  
}