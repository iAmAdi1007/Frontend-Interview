function throttle(callback, delay) {
  let timerId
  let lastCallTime = 0
  const throttledFunction = function(...args){
    const currentTime = Date.now()
    const timePassedSinceLastCall =  currentTime - lastCallTime
    const delayRemaining = delay - timePassedSinceLastCall
    if(delayRemaining <= 0){
      lastCallTime = currentTime;
      callback.apply(this, args)
    }else{
      clearTimeout(timerId)
      timerId = setTimeout(()=>{
        lastCallTime = Date.now()
        callback.apply(this, args)
      }, delayRemaining)
    }

  }
  throttledFunction.cancel = function(){
    clearTimeout(timerId)
  }

  return throttledFunction
}

// Do not edit the line below.
exports.throttle = throttle;
