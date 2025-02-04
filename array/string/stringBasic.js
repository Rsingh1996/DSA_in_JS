// Reverse a String
// Problem 1: Write a function to reverse a given string.

const reverseString = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};

console.log(reverseString("Java Script")); // output : tpircS avaJ // time complexity O(n)

// Check if String is Palindrome
// Problem 2: Check if a given string reads the same forward and backward.
const stringPalindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(stringPalindrome("racecar")); // output : true // time complexity O(n)

// Count the Vowels in a String
// Problem 3: Count the number of vowels in a string.
const vowelCount = (str) => {
  let vowelCount = 0;
  const vowel = "aeiou";
  let lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (lowerStr[i] === vowel[j]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
};

console.log(vowelCount("Vowel String")); // output : 3 // time complexity O(n)

const vowelCountOptimize = (str) => {
  let vowelCount = 0;
  const vowelMap = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  let lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    if (vowelMap[lowerStr[i]]) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(vowelCountOptimize("Vowe String")); // output : 3 // time complexity O(n)

// Remove Duplicates from a String
// Problem 4: Remove duplicate characters from a string.
const removeDuplicate = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let duplicateFound = false;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === newStr[j]) {
        duplicateFound = true;
        break;
      }
    }
    if (!duplicateFound) {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(removeDuplicate("Banana")); // output : Ban // time complexity O(n^2)

const removeDuplicateOptimzed = (str) => {
  let newStr = "";
  let seen = {};
  for (let i = 0; i < str.length; i++) {
    if (!seen[str[i]]) {
      newStr += str[i];
      seen[str[i]] = true;
    }
  }
  return newStr;
};

console.log(removeDuplicateOptimzed("Banana")); // output : Ban // time complexity O(n)

// String Length
// Find the length of a string without using built-in functions.
const lengthOfString = (str) => {
  let i = 0;
  while (str[i]) {
    i++;
  }
  return i;
};

console.log(lengthOfString("Banana")); // output : 6 // time complexity O(n)

// Find the First Occurrence of a Character
// Given a string and a character, find the first occurrence of the character in the string.

// Find the Last Occurrence of a Character
// Given a string and a character, find the last occurrence of the character in the string.

// Check if a String Contains a Substring
// Given a string and a substring, check if the substring exists in the string.

// Count the Number of Substring Occurrences
// Count how many times a given substring appears in the string.

// Pattern Matching (Naive Approach)
// Implement a simple string matching algorithm (i.e., brute-force approach).
