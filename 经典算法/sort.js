/**
 *几种排序算法
 *@TangGuichuan
 *
 */


/**
 * @选择排序  http://en.wikipedia.org/wiki/Selection_sort
 *
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
 *@冒泡排序  http://en.wikipedia.org/wiki/Bubble_sort
 *
 *原理：两两比较顺序,如果顺序错误则交换位置
 */

function bubbleSort(arr){
  var 
      i = arr.length - 1,
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
 *@插入排序 http://en.wikipedia.org/wiki/Insertion_sort
 *
 *原理：1.从第二位（当前元素）开始从后向前查找
 *      2.若新元素（当前元素的前面）大于当前元素，将新元素移到下一位置
 *      3.重复2，直到在有序区找到大于或等于新元素的位置
 *      4.将当前元素插到上面找到的位置
 *      5.重复2~4
 */

function insertionSort(arr){
    var 
        len = arr.length,
        i = 1,
        j,
        buffer;

    for (; i < len; i++) {
        buffer = arr[i];

        //在当前元素从后向前遍历,
        //一旦找到比当前元素大的就进行“元素加位”
        for (j = i - 1; j >= 0 && arr[j] > buffer; j--) {
                arr[j+1] = arr[j];
        }
        //找到的位置替换为当前元素，比它大的在上面已经“加位”了
        arr[j+1] = buffer;
    }
    
    return arr;
}

/**
 * @二分插入排序
 * 用二分法对插入排序进行优化
 *
 */

function binaryInsertSort(arr){

}

/**
 * @归并排序
 * 
 * /

