/**
 *几种排序算法
 *@TangGuichuan
 *
 */


/**
* 选择排序  http://zh.wikipedia.org/wiki/选择排序
* 原理：在未排序的序列中找到最大（小）的元素与第1个元素交换，
* 在剩余元素中继续找最大（小）的元素与第2个元素交换，
* 以此类推，直到排序完毕
*/

function selectionSort(arr){
   var 
      i = arr.length - 1,
      j,
      special; //最大或最小值的位置

    // 采用倒序，提高查找性能
    for (; i >= 0;  i--) {
      special = i;

      for (j = i - 1; j >= 0; j--) {

        // 正序与倒序取决于这里的判断,max or min
        if(arr[special] < arr[j]){
          // 当前的最值位置
          special = j;
        }
      }

      // 最值与当前位置的值交换位置
      arr[special] = [arr[i], arr[i] = arr[special]][0];
    }

    return arr;
}
