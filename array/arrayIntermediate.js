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
  for (let i = 0; i < arr.length - 1; i++) {
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
// Problem 3: Rotate an array by k positions to the right or left.

const arrayRightRotaion = (arr, k) => {
  let temp = 0;
  const arrayLength = arr.length;
  let newArray = [];
  k = k % arrayLength;

  if (k === 0) {
    return arr;
  }
  for (let i = k; i < arrayLength; i++) {
    newArray[temp] = arr[i];
    temp++;
  }
  for (let i = 0; i < k; i++) {
    newArray[temp] = arr[i];
    temp++;
  }
  return newArray;
};
console.log(arrayRightRotaion([1, 2, 3, 4, 5], 7)); // Output: [ 3, 4, 5, 1, 2 ] time complexity is O(n)

// Merge Two Sorted Arrays
// Problem 4: Merge two sorted arrays into a single sorted array.

const mergeOfTwoArray = (arr1, arr2) => {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArray.push(arr1[i]);
      i++;
    } else {
      newArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
};
console.log(mergeOfTwoArray([1, 2, 3, 4, 5, 9], [2, 6, 7, 10, 12])); // Output: [1, 2, 2, 3, 4, 5, 6, 7, 9, 10, 12] time complexity is O(n + m)

// Find Duplicates in an Array
// Problem 5: Find all duplicates in an array.

const findDuplicate = (arr) => {
  let duplicateValueArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicateValueArray.includes(arr[i])) {
        duplicateValueArray.push(arr[i]);
      }
    }
  }
  return duplicateValueArray;
};

console.log(findDuplicate([3, 2, 3, 4, 3, 4, 8, 9, 2, 3, 2])); // Output: [ 3, 2, 4 ] time complexity is O(n^2)

const findDuplicateOptimized = (arr) => {
  let duplicateValueArray = [];
  let seen = {};
  let duplicatesAdded = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]] === true && !duplicatesAdded.has(arr[i])) {
      duplicateValueArray.push(arr[i]);
      duplicatesAdded.add(arr[i]);
    } else {
      seen[arr[i]] = true;
    }
  }
  return duplicateValueArray;
};

console.log(findDuplicateOptimized([3, 2, 3, 4, 3, 4, 8, 9, 2, 3, 2])); // Output: [ 3, 2, 4 ] time complexity is O(n)

// Find the Majority Element
// Problem 6: Find the element that appears more than n/2 times in an array (if exists).
const findMajorityElement = (arr) => {
  if (arr.length === 0) return -1;
  let mejorityElement = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === mejorityElement) {
      count++;
    } else count--;
    if (count === 0) {
      mejorityElement = arr[i];
    }
  }
  let finalCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === mejorityElement) {
      finalCount++;
    }
  }

  if (finalCount > arr.length / 2) {
    return mejorityElement;
  } else return -1;
};

console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 time complexity is O(n)

// Problem: Find all duplicates in an array without using extra space.

// Array Subset Sum
// Problem: Given an array, find all subsets whose sum equals a given number.

// Find the Union and Intersection of Two Arrays
// Problem: Find the union and intersection of two arrays without duplicates.
