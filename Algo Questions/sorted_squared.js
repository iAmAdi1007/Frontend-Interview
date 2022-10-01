function sortedSquaredArray(array) {
    let n = array.length;
    const resultArray = new Array(n).fill(0);
    let start = 0, end = n - 1;
    while(start <= end){
        if(array[start] * array[start] >= array[end] * array[end]){
            resultArray[end] = array[start] * array[start];
        }else{
            resultArray[end] = array[end] * array[end];
        }
        end--;
    }
    return resultArray;
  }
  
// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
  