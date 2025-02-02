// Move All Zeros to the End
// Problem 1: Given an array, move all zeros to the end while maintaining the relative order of the non-zero elements.

const moveAllZero = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[j] = arr[i];
      j++;
    }
  }
  for (let i = j; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};
console.log(moveAllZero([1, 4, 0, 7, 18, 0, 25, 0])); // Output: [1, 4, 7, 18, 25, 0, 0, 0] time complexity is O(n)

const moveAllZeroOtimized = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[j] = arr[i];
      if (i !== j) {
        arr[i] = 0;
      }
      j++;
    }
  }
  return arr;
};
console.log(moveAllZeroOtimized([1, 4, 0, 7, 18, 0, 25, 0])); // Output: [1, 4, 7, 18, 25, 0, 0, 0] time complexity is O(n)

// Find the "Kth" Largest/Smallest Element
// Problem 2: Given an unsorted array, find the kth largest/smallest element.

const findKthLargestAndSmallest = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return `Largest = ${arr[k - 1]} and Smallest =${arr[arr.length - k]}`;
};

console.log(findKthLargestAndSmallest([25, 9, 12, 40, 10, 15, 46], 3)); // Output: Largest = 25 and Smallest =12 time complexity is O(n^2)

// Array Rotation
// Problem: Rotate an array by k positions to the right or left.

// Merge Two Sorted Arrays
// Problem: Merge two sorted arrays into a single sorted array.

// Find Duplicates in an Array
// Problem: Find all duplicates in an array without using extra space.

// Array Subset Sum
// Problem: Given an array, find all subsets whose sum equals a given number.

// Find the Union and Intersection of Two Arrays
// Problem: Find the union and intersection of two arrays without duplicates.

// Find the Majority Element
// Problem: Find the element that appears more than n/2 times in an array (if exists).
