// Sum of all element in an Array
const sumOfArrayElements = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumOfArrayElements([1, 2, 3, 4, 5])); // ouput = 15 // time complexity = O(n)

// Reverse the Array
const reverseOfArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

console.log(reverseOfArray([1, 2, 3, 4, 5])); // output = [5,4,3,2,1] // time complexity = O(n)

// Inster an element at a specific index in an array
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

// Delete an element from a specific index in an array

const removeElementInArray = (arr, index) => {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
};

console.log(removeElementInArray([1, 2, 3, 4, 5], 2)); // output = [1,2,4,5] // time complexity = O(n)

// Find the Maximum and Minimum Element
const FindMaxAndMinInArray = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return `max = ${max} and min = ${min} `;
};

console.log(FindMaxAndMinInArray([112, 99, 109, 40, 59, 76])); // output : max = 112 and min = 40 // time complexity = O(n)
