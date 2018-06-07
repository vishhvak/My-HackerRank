/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var flag = 0;
    if (nums.length >= 1 && nums.length <= 10) {
        for (var i=0; i<nums.length; i++) {
            if (nums[i] < 0 || nums[i] > 100) {
                flag = 1;
            }
        }
        if (flag == 0) {
            let arr = Array.from(new Set(nums));
            arr.sort(function(a, b){return a-b});
            return arr[arr.length-2];
        }
    }
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}