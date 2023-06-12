// Return a new array consisting of elements which are multiple of their own index in input array (length > 1)



// Solution 


function multipleOfIndex(array) {
    let newArr = []
    for( let i=0; i < array.length; i++){
      if(array[i] % i === 0 ){
        newArr.push(array[i])
      }
    }
    return newArr
  }

  //established the var of newArr as the placeholder for when we'll send the results
  //we created a for loop to iterate throught the array
  //a conditional when the element inside the x index is either true or false
  //when true, our variable is then added with the push method 
  //inside the method is the selected index element being pushed
  //at the end of the for loop we then return/call for our variable of newArr