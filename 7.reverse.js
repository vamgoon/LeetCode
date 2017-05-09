/**
 * Created by vamgoon on 2017/5/9.
 */
const reverse = (x) => {
    if (x > 2147483647 || x < -2147483648) {
        return 0;
    }
    if (x >= 0) {
        return parseInt(x.toString().split('').reverse().join(''))
    } else {
        return -1 * parseInt((-1 * x).toString().split('').reverse().join(''))
    }
};

console.log()