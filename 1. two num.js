/**
 * Created by Vamgoon on 2017/5/5.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    
    for (let i = 0, j = nums.length; i < j; i++) {
        let index = nums.indexOf(target - nums[i], i);
        
        if (index !== -1) {
            return [i, index]
        }
    }
    
    return false
};
