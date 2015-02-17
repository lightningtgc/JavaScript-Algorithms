
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
