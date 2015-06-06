/*
* Question:
* Given an array of integers, find if the array contains any duplicates. 
* Your function should return true if any value appears at least twice in the array, 
* and it should return false if every element is distinct.
*  
* 注释： 判断一个数组是否有重复元素，如果重复则返回true,反之返回false
*
* Runtime: 136 ms
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var tempHash = {};
    var i = nums.length -1;
    var isDistinct = false;
    //注意空数组情况，倒序提高速度
    while (0 <= i){
        if (!tempHash[nums[i]]){
            tempHash[nums[i]] = true;
        } else {
            isDistinct = true;
        }
        i--;
    }
    
    return isDistinct;
};
