// 2704. To Be Or Not To Be

/**
 * @param {string} val
 * @return {Object}
 */
// var expect = function(val) {

// };

const expect = (val) => {
    let toBe = (val2) => {
        if (val === val2) {
            return true;
        } else { 
            throw new Error('Not Equal');
        }
    }
        
    let notToBe = (val2) => {
        if (val !== val2) {
           return true;
        } else { 
            throw new Error('Equal');
        }
    }
    return {
        toBe: toBe,
        notToBe: notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */