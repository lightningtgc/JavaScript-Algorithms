/*
* 题目：将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词
*
*/
var testArr = ["this", "is", "a", "test"],
    testLen = testArr.length,
    i = 0,
    j = testLen - 1;

// 正序
for (; i < testLen; i++ ) {
    console.log(testArr[i]);
}

// 倒序
for (; j >= 0; j--) {
    console.log(testArr[j])
}
