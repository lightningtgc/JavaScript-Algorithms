/**
 *  Question:
 *    Given a roman numeral, convert it to an integer.
 *    Input is guaranteed to be within the range from 1 to 3999.
 *  Tag:
 *    Math, String
 * 
 *    注： 将罗马数字转为阿拉伯数字 如 'XLV' == 45
 *  罗马数字规则：
 *    1. 重复数次：一个罗马数字重复几次，就表示这个数的几倍。
 *    2. 右加左减,较大的数的右边跟着较小的数，表示大数加小数，反之大减小。
 *        左减的数字有限制，仅限于I、X、C。比如45不可以写成VL，只能是XLV。(此处忽略)
 *        左减数字必须為一位，比如8写成VIII，而非IIX。 （此处忽略)
 * 
 * /

 //遍历罗马数字，如果某个数比前一个数小，则加上该数。反之，减去前一个数的两倍然后加上该数
 
var romanToInt = function(s) {
    var rToIMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    var result = rToIMap[s[s.length-1]];
    
    for(var i=s.length-2; i>=0; i--)  {
      var currNum = rToIMap[s[i]],
          afterNum = rToIMap[s[i+1]];
          
        if (currNum >= afterNum) {
          result += currNum;  
        } else {  
          result -= currNum; 
        }
    } 
    
    return result;
};
