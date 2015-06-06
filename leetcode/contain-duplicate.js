/*
* Question:
* Given an array of integers, find if the array contains any duplicates. 
* Your function should return true if any value appears at least twice in the array, 
* and it should return false if every element is distinct.
*  
* 
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
