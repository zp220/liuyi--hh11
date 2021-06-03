function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var center = arr.shift();
    var left = [],
        right = [];
    arr.forEach(function (item, index) {
        if (item < center) {
            left.push(item);
        } else {
            right.push(item);
        }
    });
    console.log(left, center, right);
    var newArr = quickSort(left).concat(center, quickSort(right));
    return newArr;
}
module.exports =  quickSort;