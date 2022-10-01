let nameObj = {
    firstName: "Aditya",
    lastName: "Pratap",
    printfullName: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}

nameObj.printfullName()

let name2 = {
    firstName: "Akshay",
    lastName: "Saini"
}

nameObj.printfullName.call(name2)

bindFunction = nameObj.printfullName.bind(name2)
bindFunction()


function demoFunction(firstName, lastName) {
    console.log(firstName + " " + lastName + " ji");
}

demoFunction.call({}, nameObj.firstName, nameObj.lastName)

Function.prototype.myCall = function (thisContext, ...args) {
    let symbol = Symbol()
    thisContext[symbol] = this
    let rv = thisContext[symbol](...args)
    delete thisContext[symbol]
    return rv
};

Function.prototype.myApply = function (thisContext, args = []) {
    return this.myCall(thisContext, ...args)
};

Function.prototype.myBind = function (thisContext, ...args) {
    return (...newArgs) =>{
        console.log("Inside myBind")
        console.log(this)
    }
};

nameObj.printfullName.myBind(nameObj,"Aditya", "Pandey")()


