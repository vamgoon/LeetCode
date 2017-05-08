/**
 * Created by Vamgoon on 2017/5/7.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    let tempArr = nums1.concat(nums2);
    let len = tempArr.length;

    tempArr.sort((a, b) => a - b);
    if (len % 2 === 1) {
        return tempArr[(len - 1) / 2]
    } else {
        return (tempArr[len / 2] + tempArr[len / 2 - 1]) / 2
    }
};
