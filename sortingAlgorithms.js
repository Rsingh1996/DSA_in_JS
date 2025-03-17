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

// Insertion Sort
// Problem - Given an array of integers, sort the array.
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
