/**
 * Created by vamgoon on 2017/5/8.
 */
let startIndex = 0;
let maxLen = 0;
const longestPalindrome = (s) => {
    let obj1;
    let obj2;
    let len = s.length;

    if (len === 1) {
        return s;
    }

    for (let i = 0; i < len-1; i++) {
        obj1 = extendPalindrome(s, i, i);
        obj2 = extendPalindrome(s, i, i+1);
    }
    return obj1.maxLen >= obj2.maxLen
        ? s.substring(obj1.startIndex, obj1.startIndex + obj1.maxLen)
        : s.substring(obj2.startIndex, obj2.startIndex + obj2.maxLen);
};

const extendPalindrome = (s, j, k) => {

    while (j >= 0 && k < s.length && s.charAt(j) === s.charAt(k)) {
        j--;
        k++;
    }
    if (maxLen < k - j - 1) {
        startIndex = j + 1;
        maxLen = k - j - 1;
    }
    return {
        startIndex,
        maxLen
    }
};

console.log(longestPalindrome("cbbd"))
