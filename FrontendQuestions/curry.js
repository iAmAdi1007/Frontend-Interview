// The below function takes in a callback and returns a curried version of the same. This returned function can take in any number of arguments and keep on returning
// the curried form of it

function curry(callback) {
  const curriedFunction =  (...args) => {
    if(args.length === 0){
      return callback(...args);
    }else{
      return (...otherArgs) => {
        if(otherArgs.length === 0){
          return callback(...args);
        }

        return curriedFunction(...args, ...otherArgs);
      }
    }
  }

  return curriedFunction;
}


function sum(...nums){
  return nums.reduce((prev, curr) => {
    return prev + curr;
  }, 0)
}

function sumOfTwoNumbers(a, b){
  return a + b;
}
// Curry example with 2 params
function curried(sumOfTwoNumbers){
  return function(a){
    return function(b){
      return sumOfTwoNumbers(a, b)
    }
  }
}
const curriedForm = curried(sumOfTwoNumbers)
console.log(curriedForm(5)(6)(11))


const curriedSum = curry(sum);
console.log(curriedSum());

// Do not edit the line below.
// exports.curry = curry;
