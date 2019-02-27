var some = {
    matrix: 6,
    dimension: [],
    mapArr: function () {
        var newArr = this.dimension.slice();
        var newStr = [];
        return function () {
            newArr.slice().forEach(function (item, index) {
                newStr.push([]);
                item.forEach(function (itm, ind) {
                    newStr[index][ind] = newArr[ind][item.length - 1 - index];
                });
            });
            return { suit: newStr };
        };
    }
};
function SomeArray(some) {
    for (var i = 0; i < some.matrix; i++) {
        var Arr = [];
        for (var j = 1; j <= some.matrix; j++) {
            Arr.push(j);
        }
        some.dimension.push(Arr.slice());
    }
    console.log(some.dimension)
    return some.dimension;
}
SomeArray(some);
var maparr = some.mapArr();
var jg = maparr();
console.log(jg.suit);
// document.body.innerHTML = maparr()
