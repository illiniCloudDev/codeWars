//Coding challenge

// Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
// He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them. Your function should return how many mistakes Alex can afford to make.


//solution
function alexMistakes(numberOfKata, timeLimit){
  let count = 0 //counts the mistakes
  let start = 5 //time in minutes needed to do pushups
  let time = (timeLimit - numberOfKata * 6) //minimum time needed to complete kata subtracted by overal time  
  
  while (time - start >= 0) {
    count++
    time -= start
    start *= 2
  }
  return count
}