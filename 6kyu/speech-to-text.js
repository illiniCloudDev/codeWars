//coding challengeSiri needs you to code some new features: addition, subtraction and a weather checker. There's no need to implement the speech recognition, that's taken care of...

// Examples: "Add 7 to 15." -> 22 "Subtract 7 from 15." -> 8 "What is the weather at 5:30pm?" -> "sunny"

// According to the weather API, it is "sunny" from (including) 6am to 6pm (including), and "raining" the rest of the day.

// For the purposes of this kata, 12:00am is midnight and 12:00pm is noon.

//solution
const bot = {
    message(prompt) {
      //Params is  a string 
      //Return the weather or math result
      //Ex
      //Pseudo code 
      //we must split the string by words
      //identify what arithmetic action is asked for 
      // use an object to match the 
      //we will make a key value pair 
      let strSplit = prompt.split(' ')
      
      if(strSplit.includes('Add')){
        return (parseInt(strSplit[1]) + parseInt(strSplit[3]))
        
      }else if(strSplit.includes('Subtract')){
        return (parseInt(strSplit[3]) - parseInt(strSplit[1]))
        
      }else if(strSplit.includes('weather')){
        let timeStr = strSplit[strSplit.length -1]
        let hour = parseInt(timeStr)
        let isAM = timeStr.includes('am')
        let isPM = timeStr.includes('pm')

        if (isPM && hour !== 12) {
          hour += 12; 
      } else if (isAM && hour === 12) {
          hour = 0;
      }
        if(hour >= 6 && hour <= 18){
          console.log(timeStr)
          return 'sunny'
        }else{
          console.log(timeStr)
          return 'raining'
        };
        
      };
      
    }
};