// 2727. Is Object Empty

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return obj = Object.keys(obj).length > 0 ? false : true
};