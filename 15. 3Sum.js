/**
 * Created by vamgoon on 12/06/2017.
 */
const threeSum = (nums) => {
    let len = nums.length;
    let result = [];

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j  < len; j++) {
            let diff = -(nums[i] + nums[j]);
            let newNums = nums.slice(j + 1, -1)
            let index = newNums.indexOf(diff)

            if (index !== -1) {
                result.push([nums[i], nums[j], newNums[index]]);
            }
        }
    }

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))