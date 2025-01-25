// Problem 1 : Two Sum
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSum = function (nums, taget) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === taget) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9)); // time complexity O(n^2)

// Problem 2 : Remove Element
/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/

var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // time complexity O(n)

// Problem 3 : Length of Last Word
/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
Example
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

var lengthOfLastWord = function (s) {
  let length = 0;
  let foundWord = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      length++;
      foundWord = true;
    } else if (foundWord) {
      break;
    }
  }
  return length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // time complexity O(n)

// Problem 4 : Plus One

/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
Example 
Input: digits = [9,9]
Output: [1,0,0]
Explanation: The array represents the integer 99.
Incrementing by one gives 99 + 1 = 100.
Thus, the result should be [1,0,0].
*/

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOne([9, 9])); // time complexity O(n)
