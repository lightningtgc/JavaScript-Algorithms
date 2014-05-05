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
      buffer,
      special; //最大或最小值的位置

    // 采用倒序，提高查找性能
    for (; i >= 0;  i--) {
      special = i;
      buffer = arr[i];

      for (j = i - 1; j >= 0; j--) {

        // 正序与倒序取决于这里的判断,max or min
        if(buffer < arr[j]){
          // 当前的最值位置
          special = j;
          buffer = arr[j];
        }
      }
      // 最值与当前位置的值交换位置
      arr[special] = [ arr[i], arr[i]=buffer ][0];
    }

    return arr;
}


/**
 *冒泡排序  http://en.wikipedia.org/wiki/Bubble_sort
 *原理：两两比较顺序,如果顺序错误则交换位置
 *
 */

function bubbleSort(arr){
  var 
      i = arr.length -1,
      j;

  for (; i >= 0; i--) {

    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j+1]) {
        arr[j] = [ arr[j+1], arr[j+1]=arr[j] ][0];
      }
    }

  }

  return arr;
}

/**
* 插入排序
*
*/
