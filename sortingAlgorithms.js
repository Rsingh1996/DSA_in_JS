// Bubble Sort
// Problem 1 - Given an array of integers, sort the array.
// const arr = [-6, 20, 8, -2, 4] Should return -> [-6, -2, 4, 8, 20]

const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

const arr = [-6, 20, 8, -2, 4];
console.log(bubbleSort(arr)); // Output: [-6, -2, 4, 8, 20] Big-O = O(n^2)

// Insertion Sort
// Problem 2 - Given an array of integers, sort the array.
// const arr = [-6, 20, 8, -2, 4] Should return -> [-6, -2, 4, 8, 20]
// [-6, 20, 20, 8, 4
const insertionSort = (arr) => {

        for (let i = 1; i < arr.length; i++) {
            let numberToInsert = arr[i];
            let j = i -1; 
            while(j >= 0 && arr[j] > numberToInsert ){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = numberToInsert;
            }
    return arr;
}

const arr = [-6, 20, 8, -2, 4];
console.log(insertionSort(arr)); // Output: [-6, -2, 4, 8, 20] Big-O = O(n^2)

// Quick Sort
// Problem 3 - Given an array of integers, sort the array.
// const arr = [-6, 20, 8, -2, 4] Should return -> [-6, -2, 4, 8, 20]
const quickSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    let pivotElement = arr[arr.length - 1];
    let leftArr = [];
    let rightArr =[];
    for(let i = 0; i < arr.length-1; i++ ){
        if(arr[i] < pivotElement){
            leftArr.push(arr[i]);
        } else if(arr[i]>= pivotElement){
            rightArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr), pivotElement,  ...quickSort(rightArr)]
        
}

const arr = [-6, 20, 8, -2, 4];
console.log(quickSort(arr)); // Output: [-6, -2, 4, 8, 20] Big-O = O(n^2)

// Merge Sort
// Problem 4 - Given an array of integers, sort the array.
// const arr = [-9, 15, 10, -3, 7] Should return -> [-9, -3, 7, 10, 15]
const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}
function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];

}
const arr = [-9, 15, 10, -3, 7];
console.log(mergeSort(arr)); // Output: [-9, -3, 7, 10, 15] Big-O = O(nlogn)
