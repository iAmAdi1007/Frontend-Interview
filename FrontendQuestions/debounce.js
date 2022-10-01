function debounce(callback, delay, immediate = false) {
    let timerId
    return function(...args){
        let shouldCallImmediately = timerId == null && immediate
        if(shouldCallImmediately){
            callback.apply(this, args)
        }
        clearTimeout(timerId)
        timerId = setTimeout(()=>{
            if(!immediate){
                callback.apply(this, args)
            }
            timerId = null
        }, delay)
    }
}


// Do not edit the line below.
exports.debounce = debounce;
