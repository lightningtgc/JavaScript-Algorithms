//动态规划的题

/**
 * Question: 
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed,
 * the only constraint stopping you from robbing each of them is that adjacent houses have security system connected
 * and it will automatically contact the police 
 * if two adjacent houses were broken into on the same night.

 * Given a list of non-negative integers representing the amount of money of each house, 
 * determine the maximum amount of money you can rob tonight without alerting the police.
 * 
 * /
  
  
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
     var currMaxPV = 0, //当前最大值：上一轮循环中的最大值加上当前值
        lastRealMax = 0, //上一轮循环中的真正的最大值
        i = nums.length -1, 
        tempLastMaxPV, //
        realLastMax;
        while ( 0 <= i) { // eg: [2,1,1,2]
            tempLastMaxPV = currMaxPV; //2 0 3
            realLastMax = lastRealMax; //0 2 2
            currMaxPV = realLastMax + nums[i];//1 3 4
            lastRealMax = tempLastMaxPV > realLastMax ? tempLastMaxPV :realLastMax;//2 2 3
            i--;
        }
        return currMaxPV > lastRealMax ? currMaxPV : lastRealMax;
};
