/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    const modulus = (a) => { return (a%2) };
    const even = (a) => { return 2*a };
    const odd = (a) => { return 3*a };
    for (var i=0; i<nums.length; i++) {
        if(modulus(nums[i]) == 0)
            nums[i] = even(nums[i]);
        else
            nums[i] = odd(nums[i]);
    }
    return nums;
}

/* Simplest way -
// i & 1 will be 1, or true, if 'i' is odd
    return nums.map(i => (i & 1) ? i * 3 : i * 2); */

function main() {
    const n = 5;
    const a = [1,2,3,4,5];
    console.log(modifyArray(a).toString().split(',').join(' '));
}