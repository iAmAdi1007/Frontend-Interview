
const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected"
};
class MyPromise {
  #state = STATE.PENDING;
  #value = null;
  constructor(executorFunc) {
    try {
      executorFunc(value => this.#resolve(value), value => this.#reject(value));
    } catch (error) {
      this.#reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // Write your code here.
  }

  catch(onRejected) {
    // Write your code here.
  }

  get state() {
    return this.#state;
  }

  get value() {
    return this.#value;
  }

  #resolve(value){
    this.state = STATE.FULFILLED;
    this.#value = value;
  }

  #reject(value){
    this.state = STATE.REJECTED;
    this.#value = value;
  }
}

// Do not edit the line below.
exports.MyPromise = MyPromise;
