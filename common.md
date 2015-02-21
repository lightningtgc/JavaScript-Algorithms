
### 1.Fibonacci--斐波那契数列

算法复杂度为[O(2n)](http://stackoverflow.com/questions/360748/computational-complexity-of-fibonacci-sequence/360773#360773)

```js
function fibonacci(n) {
  return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2); 
}
```

### 2.求数组中的最大值

```js
function maxInArray(arr) {
  return Math.max.apply(Math, arr);
}
```

### 3. 字符串反转

```js
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}
```
or

```js
String.prototype.reverse = function() {
    var str = '';
    var len = this.length;
    while (len>0) {
        str += this.substring(len-1, len);
        len--;
    }
    return str;
}
```

注: 在类似'foo 𝌆 bar'这种astral symbol,将展示异。

可以使用[ Esrever](https://github.com/mathiasbynens/esrever) 来处理这种特殊字符的反转。

### 4.反转DOM


### 5.移除重复字符

注：需问清楚是否关注字母大小写与空格问题。

```js
function removeDuplicateChar(str){
  var strArr = str.split('');
  var targetArr = [];
  strArr.forEach(function(item){
    if (strArr.indexOf(item) === strArr.lastIndexOf(item)) {
      targetArr.push(item)
    }
  })
  
  // 去除空格，区分大小写
  return targetArr.join('').split(' ').join('');

}
```

### 6.是否是 回文(palindrome)

回文：从左到右跟从右到左是一样的。

Bulid-in 内置方法
```js
function isPalindrom(str) {
    return str === str.split('').reverse().join('');
}
```

原生方法：
```js
function isPalindrome(str){
  var i, len = str.length;
  // 前一半与后一半进行对比，如果有不同的就不是
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}
```

### 7.数-数字

从0 开始到n总共多少个“什么数字”（0，1，2...）

如从0到2015有多少个0：

```js
function countNumber(n){
  // 包括0，即单位数都算
  var count = 1;
  while(n>0){
   count += Math.floor(n/10);
   n = n/10;
  }
  return count;
}
```
