function merge(array1, array2) {
    let newArray =[];
    while (array1.length || array2.length) {
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;
        let next; 

        if (ele1 < ele2) {
            next = array1.shift()
        } else {
            next = array2.shift()
        }

        newArray.push(next);
    }
    return newArray.concat(array1)
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIdx = Math.floor(array.length / 2);
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};