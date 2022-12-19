// If you don't know who Waldo is, he's a nice guy who likes to be in crowded places. But he's also a bit odd as he always likes to hide in plain sight. Can you spot Waldo in the crowd?

// Task
// Given crowd, an array of strings of equal length, representing a crowded place, return an array with two integers representing the coordinates [y, x] where Waldo can be found ([0, 0] is top-left, y being the row and x being the column ).

// Examples
// We've spotted Waldo a couple of times in the past. Below is what we found out. Note that he's been in much more crowded places lately.

// #1 Waldo at the beach
// "             "          Air
// "         w   "           Air with a bird
// "   w         "           Air with a bird
// "~~~~~~~~~~~~~"           Sea
// ".~..~~.~~~..~"           Waves on beach
// "...P......P.."           Beach with some people
// "......P..P..."           Beach with some people
// "..PW........."           Beach with Waldo and presumably a friend next to him

// Unredacted report: Waldo can be found at [7, 3], wearing his usual outfit

// #2 Waldo visiting the Great Pyramid
// "                              "          Air
// "                              "           Air
// "            _                 "           Top of pyramid
// "          _____               "           Layer of pyramid
// "        _________             "           Layer of pyramid
// "  B  _______________   G   GG "           Ground layer of pyramid with several people, including Waldo

// Unredacted report: Waldo can be found at [5, 2], wearing special clothes protecting him from the sun

//My solution

function findWaldo(crowd) {
    // Return y (row) and x (column) coordinates of Waldo ([0,0] is top-left)
    //y is the index of crowd 
    //x index of array in the crowd
    let result = []
    let waldo = ''
    //we iterate through the crowdArr
    //we then iterate through the array in the array
    //we push the elements to the result
    for(let i = 0; i < crowd.length; i++){
      for(let j = 0; j < crowd[i].length; j++){
        result.push(crowd[i][j])
      }
    }
    //sorts the array in order
    result.sort()
    //we iterate through the result array to get ourselves a 
    for( let i = 1; i < result.length - 1; i++){
      if( result[i] != result[i - 1] && result[i] != result[i + 1]){
        waldo = result[i]
      }
    }
  
    for(let i = 0; i < crowd.length; i++){
      for(let j = 0; j < crowd[i].length; j++){
        if( crowd[i][j] == waldo ){
          return [i, j]
        }
      }
    }
  }