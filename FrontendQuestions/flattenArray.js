// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */


function flat(arr, depth = 1) {
  if(depth === 0){
    return [...arr];
  }
  let res = [];
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      let flattenedVal = flat(arr[i], depth - 1);
      res = res.concat(flattenedVal);
    }else{
      res.push(arr[i]);
    }
  }
  
  return res;
}

const arr = [1, [2], [[3, [4]], [5]]];
// [1, 2, [3, [4]], [5]] --> 1
// [1, 2, 3, [4], 5] --> 2

// console.log(flat(arr))
// flat(arr, 1)
console.log(flat(arr, 2))

