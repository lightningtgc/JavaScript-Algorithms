/**
 *  洗牌算法：
 *  1. 从第一张牌开始，将每张牌和随机的一张牌进行交换
 *  2. 更优解法：从第一张牌开始，将每张牌和之前全部牌中随机的一张进行交换
 *  3. C++ 标准库函数 std::random_shuffle (原理与第一点差不多)
 */

//inspired by http://www.cs.princeton.edu/~rs/
function shuffle(arr) {
  var len = arr.length, i;
  while (len) {
    i = Math.random() * len-- | 0; // 0 ≤ i < n
    arr[len] = [ arr[i], arr[i] = arr[len] ][0];
  }
  return arr;
}

