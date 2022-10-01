function twoNumberSum(array, targetSum) {
  let returnArray = [];
  array.sort((a, b) => a - b);
  let st = 0
  let end = array.length - 1;

  while (st < end) {
    if (st != 0 && array[st] === array[st - 1]) continue;
    let sum = array[st] + array[end]
    if(sum === targetSum){
        returnArray[0] = array[st]
        returnArray[1] = array[end]
        break
    }else if(sum > targetSum){
        end--
    }else{
        st++
    }
  }
  return returnArray
  
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
