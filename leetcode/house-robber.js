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
  
/**动态规划的题
 * 
 * 思路：
 *  本质相当于在一列数组中取出一个或多个不相邻数，使其和最大。求极值的问题。
 * 我们维护一个一位数组dp，其中dp[i]表示到i位置时不相邻数能形成的最大和，
 * 经过分析，可得到递推公式dp[i] = max(num[i] + dp[i - 2], dp[i - 1])
 * 
 * 分别维护两个变量a和b，然后按奇偶分别来更新a和b，这样就可以保证组成最大和的数字不相邻


  
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
     var currMaxPV = 0, //当前最大值：上一轮循环中的最大值加上当前值
        lastRealMax = 0, //上一轮循环中的真正的最大值
        i = nums.length -1;
        
        while ( 0 <= i) { // eg: [6,3,1,6,1]
          var tempLastMaxPV = currMaxPV, //0 6 3 7 12
              tempLastMax = lastRealMax; //0 0 6 6 7
          currMaxPV = tempLastMax + nums[i];//6 3 7 12 8
          lastRealMax = Math.max(tempLastMaxPV, tempLastMax);//0 6 6 7 12
          i--;
        }
        return Math.max(currMaxPV, lastRealMax); // 12
};

