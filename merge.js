function merge(a, b) {
    let sortedArr = [];
    let aPntr = 0;
    let bPntr = 0;

    while(aPntr < a.length && bPntr < b.length) {
        if(a[aPntr] < b[bPntr]) {
            sortedArr.push(a[aPntr]);
            aPntr++;
        }
        else {
            sortedArr.push(b[bPntr]);
            bPntr++;
        }
    }

    while(aPntr < a.length) {
        sortedArr.push(a[aPntr]);
        aPntr++;
    }

    while(bPntr < b.length) {
        sortedArr.push(b[bPntr]);
        bPntr++;
    }

    return sortedArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

module.exports = { merge, mergeSort};