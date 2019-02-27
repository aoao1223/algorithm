var factorial = (function (num) {
    var number = num;
    var newnum = 1;
    var _loop_1 = function (i) {
        number += (function (n) {
            return (n * (i - 1) - n);
        })(number);
    };
    for (var i = num; i > 1; i--) {
        _loop_1(i);
    }
    for (var j = num; j > 0; j--) {
        newnum *= (function (j) {
            return j;
        })(j);
    }
    return {
        number: number,
        newnum: newnum
    };
});
console.log(factorial(10));
var mathArray = (function (num) {
    var newarr = [];
    for (var i = 0; i < num; i++) {
        newarr.push(Math.floor(Math.random() * 101 + 1));
    }
    return newarr;
});
var arr = mathArray(10);
var arr1 = mathArray(9);
// console.log(arr,arr1)
function sortRank(arr) {
    var even;
    arr.sort(function (a, b) {
        return b - a;
    });
    if (arr.length % 2 === 1) {
        var even_1 = arr.splice(0, 1).join();
        return rank({ arr: arr, even: even_1 });
    }
    else {
        return rank({ arr: arr });
    }
}
var rank = (function (obj) {
    var sortarr = [];
    var right = [];
    obj.arr.forEach(function (v, i) {
        if (i % 2 === 0) {
            sortarr.unshift(v);
        }
        else {
            right.push(v);
        }
    });
    if (!!obj.even) {
        sortarr.push(+obj.even);
    }
    console.log(sortarr, right);
    // console.log(sortarr.concat(right))
    return sortarr.concat(right);
});
console.log(sortRank(arr), 'arr');
console.log(sortRank(arr1), 'arr1');
