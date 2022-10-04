// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9



//My solution 

const multiplicationTable = size => {
    let r = []
    for(let i = 1; i<=size; i++){
      let x = []
      for(let j = 1; j<=size; j++){
        x.push(i*j)
      }
      r.push(x)
    }
    return r
  
  }
    
  //create the first array to the size