/**
 * Created by vamgoon on 2017/5/9.
 */
const isMatch = (s, p) => {
    let pattern = new RegExp(p, 'ig')
    return pattern.test(s)
};

console.log(isMatch('aas', 'a'))