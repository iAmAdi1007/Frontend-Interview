function isValidSubsequence(array, sequence) {
  if (sequence.length > array.length) return false;
  let index = 0;
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[index]) {
      index++;
    }

    if (index === sequence.length) {
      result = true;
      break;
    }
  }
  return result;
  // if(index === sequence.length ){
  //   return true;
  // }else{
  //   return false;
  // }
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
