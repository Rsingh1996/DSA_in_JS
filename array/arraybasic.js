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

console.log(reverseOfArray([1, 2, 3, 4, 5]));
