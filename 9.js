// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numberStr = x.toString();
    let reversedStr = numberStr.split('').reverse().join('');

    if (reversedStr === "0") {
        return true;
    } else if (reversedStr.charAt(0) === '0' || reversedStr.includes("-") || reversedStr !== numberStr) {
        return false;
    } else {
        return true;
    }

};

