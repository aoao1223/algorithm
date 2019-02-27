var arange = {
    arrays: [9, 8, 7, 6, 5, 4],
    ind: 4
};
function ArraySort(arange) {
    // console.log(arange.ind, arange.arrays.length -1)
    var newArr = arange.arrays.splice(-arange.ind, arange.ind);
    // console.log(newArr, arange.arrays, '截取')
    var contArr = newArr.concat(arange.arrays);
    // console.log(contArr, '合并')
    return contArr;
}
document.body.innerHTML = ArraySort(arange);
