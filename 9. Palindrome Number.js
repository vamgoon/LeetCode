/**
 * Created by vamgoon on 2017/5/9.
 */
const isPalindrome = (x) => {
    let str = x.toString();
    let len = str.length;
    let leftString = '';
    let rightString = '';

    if (len % 2 === 0) {
        leftString = str.substring(0, len / 2);
        rightString = str.substring(len / 2, len);
    } else {
        leftString = str.substring(0, (len - 1) / 2);
        rightString = str.substring((len + 1) / 2, len)
    }

    return leftString === rightString.split('').reverse().join('');
};

