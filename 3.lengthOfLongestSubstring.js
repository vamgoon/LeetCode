/**
 * Created by Vamgoon on 2017/5/7.
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let len = 0;
    
    for (let i = 0, j = s.length; i < j; i++) {
        let temp = s.charAt(i);
        
        for (let k = i + 1; k < j; k++) {
            let str = s.charAt(k);
    
            if (temp.indexOf(str) === -1) {
                temp += str
            } else {
                break
            }
        }
    
        len = len < temp.length ? temp.length : len;
    }
    
    return len
};

