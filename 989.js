// 989. Add to Array-Form of Integer

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    num = BigInt(num.join(''));
    k = BigInt(k);
    finalArr = Array.from(String(num+k));
    return finalArr;
};