/*
* Question: 同构同形字符串

* Given two strings s and t, determine if they are isomorphic.

* Two strings are isomorphic if the characters in s can be replaced to get t.

* All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

*For example,
*Given "egg", "add", return true.

*Given "foo", "bar", return false.

*Given "paper", "title", return true.

*Note:
* You may assume both s and t have the same length.
*/

// 耗时：128ms
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    var i = s.length - 1;
    var sMap = {};
    var tMap = {};
   
    for (; 0 <= i; i--) {
        // 两个Hash表，一一交换对应，判断是否一致。
       var source = sMap[t[i]];
       var target = tMap[s[i]];
        if (!source && !target){
            sMap[t[i]] = s[i];
            tMap[s[i]] = t[i];
        } else if(source !== s[i] || target !== t[i]) {
            return false;
        }
    }
    
    return true;
};

// C++最优版本 耗时： 8ms
class Solution {  
public:  
    bool isIsomorphic(string s, string t) {  
        int sTotTable[256];  
        int tTosTable[256];  
        int size = s.length();  
        for (int i = 0; i < 256; i++)  
        {  
            sTotTable[i] = 300;  
            tTosTable[i] = 300;  
        }  
  
        for (int i = 0; i < size; i++)  
        {  
            if (sTotTable[s[i]] == 300)  
            {  
                if (tTosTable[t[i]] == 300)  
                {  
                    sTotTable[s[i]] = t[i];  
                    tTosTable[t[i]] = s[i];  
                }  
                else  
                {  
                    return false;  
                }  
            }  
            else if (sTotTable[s[i]] != t[i])  
            {  
                return false;  
            }  
        }  
  
        return true;  
    }  
};  
