/**
 * Created by vamgoon on 2017/5/9.
 */
const convert = (s, numRows) => {
    let str = '';
    let strObj = {};
    let baseCircleNum = 2 * numRows - 2;

    for (let i = 0; i < numRows; i++) {
        strObj['str' + i] = ''
    }

    for (let i = 0; i < s.length; i++) {
        let remainder = i % baseCircleNum || 0;
        let index = remainder <= baseCircleNum / 2 ? remainder : baseCircleNum - remainder;
        strObj['str' + index] += s.charAt(i);
    }

    for (let key in strObj) {
        str += strObj[key];
    }

    return str;
};
