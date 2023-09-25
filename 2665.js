// 2665. Counter II

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var value = init;
    var initValue = init;
    let increment = () => {value++; return value}  
    let decrement = () => {value--; return value}
    let reset = () => {value = initValue; return value}
    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
};


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */