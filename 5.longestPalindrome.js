/**
 * Created by vamgoon on 2017/5/8.
 */
const longestPalindrome = (s) => {
    for (let pNum = s.length; pNum > 0; pNum--) {
        for (let startIndex = 0; startIndex <= s.length - pNum; startIndex++) {
            let subStr = s.substring(startIndex, startIndex + pNum);

            if (isPS(subStr)) {
                return subStr;
            }
        }
    }
};

const isPS = (str) => {
    let len = str.length;
    let leftStr;
    let rightStr;
    let midIndex;

    if (len === 1) {
        return true;
    }

    if (len % 2 === 0) {
        midIndex = len / 2;
        leftStr = str.substring(0, midIndex);
        rightStr = str.substring(midIndex, len);
    } else {
        midIndex = (len - 1) / 2;
        leftStr = str.substring(0, midIndex);
        rightStr = str.substring(midIndex + 1, len);
    }

    return leftStr === rightStr.split("").reverse().join("");
};

console.log(longestPalindrome("abcd"))
