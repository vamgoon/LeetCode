/**
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two
 * lines, which together with x-axis forms a container, such that the container contains the most water.
 Note: You may not slant the container and n is at least 2.
 * Created by vamgoon on 2017/5/10.
 */
const maxArea = (height) => {
    let len = height.length;
    let area = 0;

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            let tempArea = (height[i] >= height[j] ? height[j] : height[i]) * (j - i);
            if (area < tempArea) {
                area = tempArea;
            }
        }
    }

    return area;
}

console.log(maxArea([1,2]))