// Bubble Sort
// Problem - Given an array of integers, sort the array.
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
