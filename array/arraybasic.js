// Problem 1 : Sum of all element in an Array
const sumOfArrayElements = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumOfArrayElements([1, 2, 3, 4, 5])); // ouput = 15 // time complexity = O(n)

//Problem 2 : Reverse the Array
const reverseOfArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

console.log(reverseOfArray([1, 2, 3, 4, 5])); // output = [5,4,3,2,1] // time complexity = O(n)

//Problem 3 : Insert an element at a specific index in an array
const insertElementInArray = (arr, element, index) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  newArr[index] = element;
  for (let i = index; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
  }
  return newArr;
};

console.log(insertElementInArray([1, 2, 4, 5, 6], 3, 2)); // output = [1,2,3,4,5,6] // time complexity = O(n)

//Problem 4 : Delete an element from a specific index in an array

const removeElementInArray = (arr, index) => {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
};

console.log(removeElementInArray([1, 2, 3, 4, 5], 2)); // output = [1,2,4,5] // time complexity = O(n)

//Problem 5 : Find the Maximum and Minimum Element
const findMaxAndMinInArray = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return `max = ${max} and min = ${min} `;
};

console.log(findMaxAndMinInArray([112, 99, 109, 40, 59, 76])); // output : max = 112 and min = 40 // time complexity = O(n)

//Problem 6 : Check if an array is sorted in non-decreasing order.
const isArraySorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return `Array is Unsorted!`;
    }
  }
  return `Array is Sorted!`;
};

console.log(isArraySorted([2, 6, 19, 15, 59, 76])); // output = Array is Sorted! // time complexity = O(n)

console.log(isArraySorted([2, 6, 9, 15, 59, 76])); // output = Array is Sorted! // time complexity = O(n)

//Problem 7 : Given an element, find if it exists in the array.
const isElementExist = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
};
console.log(isElementExist([2, 6, 9, 15, 59, 76], 59)); // output = true // time complexity = O(n)

// Problem 8 : Given an array of integers from 1 to 100, there is a number missing in array. Please find the missing number.

const findMissingNumber = (arr) => {
    let sumOfArr = 0;
    const sumOfOnetoHundred = (100 * (100 + 1))/ 2

    for(let i = 0; i < arr.length; i++){
        sumOfArr += arr[i]
    }
    const missingNumber = sumOfOnetoHundred - sumOfArr;
    return missingNumber;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
console.log(findMissingNumber(arr)); // Output: 42 Big-O = O(n)
