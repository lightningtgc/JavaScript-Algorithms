// see http://www.cnblogs.com/mackxu/p/array-unique.html

// for循环删除后面重复的 速度最快，可用倒序计算可加快速度

var uniqueFor = function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var item = arr[i];
        for(var j = i+1; j < arr.length; j++ ) {
            item === arr[j] && (arr.splice(j, 1), j--);
        }
    };
    return arr;
};


//判断对象属性

var uniqueObject = function(arr) {
    var v, r = [], o = {};
    for(var i = 0; (v = arr[i]) !== undefined; i++) {
        !o[v] && (r.push(v), o[v] = true);
    }
    return r;
};


//数组过滤重复项filter

var uniqueFilter = function(arr) {
    return arr.filter(function(elem, pos, self) {
        // 如果没有重复项，返回true
        return self.indexOf(elem, pos + 1) === -1;
    });
};
