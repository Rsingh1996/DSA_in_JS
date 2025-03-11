//Problem 1: Gievn an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if target element not found.
// arr = [-5, 2, 10, 4, 6] t= 10 -> should return 2.

const linearSearch = (arr, t) => {
    let arrayLength = arr.length;
    
    for(let i = 0; i < arrayLength; i++ ){
        if(arr[i] === t){
            return i;
        }
    }
 return -1
}
console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // Output: 2   // Big-O = O(n)
console.log(linearSearch([-5, 2, 10, 4, 6], 4));  // Output: 3   // Big-O = O(n)
console.log(linearSearch([-5, 2, 10, 4, 6], 6));  // Output: 4   // Big-O = O(n)
console.log(linearSearch([-5, 2, 10, 4, 6], 1));  // Output: -1  // Big-O = O(n)


//Problem 1: Gievn an sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if target element not found.
// arr = [-5, 2, 4, 6, 10] t= 10 -> should return 2.

const binarySearch = (arr, t) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[middleIndex] === t) {
            return middleIndex;
        } else if (arr[middleIndex] < t) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }

    return -1;
}
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // Output: 4   // Big-O = O(logn)
console.log(binarySearch([-5, 2, 4, 6, 10], 4));  // Output: 2   // Big-O = O(logn)
console.log(binarySearch([-5, 2, 4, 6, 10], 6));  // Output: 3   // Big-O = O(logn)
console.log(binarySearch([-5, 2, 4, 6, 10], 2));  // Output: 1   // Big-O = O(logn)
console.log(binarySearch([-5, 2, 4, 6, 10], 1));  // Output: -1  // Big-O = O(logn)
