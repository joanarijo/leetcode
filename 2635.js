// 2635. Apply Transform Over Each Element in Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];
    arr.forEach( (element, index) => { 
        result.push(fn(element, index));
    });
    return result;
};