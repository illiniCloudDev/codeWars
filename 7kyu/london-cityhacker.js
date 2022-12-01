// You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

// ['Northern', 'Central', 243, 1, 'Victoria']
// Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

// For example: 'Piccadilly', 56, 93, 243, 20, 14 -> "£6.90"

// Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx



//My solution

function londonCityHacker(array) {
    //string is the train 
    //numbers are the bus
    //bus cost is 1.50 and the train is 2.40
    
    //arra[i] is needed to determine the element if it's a string or number
    let result = 0
    for(let i = 0; i < array.length; i++){
      if( typeof array[i] == 'string'){
        result += 2.4
      }else{
        //we are adding 1.5 to the result for the remaining and it checks whether we have a continous set of numbers 
        result += 1.5
        if( typeof array [i + 1] == "number"){
          i++
        }
      }
    }
      return '£'+ result.toFixed(2)
  }