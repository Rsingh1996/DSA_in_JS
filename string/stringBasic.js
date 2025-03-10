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
// Problem 5: Find the length of a string without using built-in functions.
const lengthOfString = (str) => {
  let i = 0;
  while (str[i]) {
    i++;
  }
  return i;
};

console.log(lengthOfString("Banana")); // output : 6 // time complexity O(n)

// Find the First Occurrence of a Character
// Problem 6: Given a string and a character, find the first occurrence of the character in the string.
const firstOccurrence = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
};

console.log(firstOccurrence("Banana", "n")); // output : 2 // time complexity O(n)

// Find the Last Occurrence of a Character
// Problem 7: Given a string and a character, find the last occurrence of the character in the string.
const lastOccurrence = (str, char) => {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
};

console.log(lastOccurrence("Banana", "a")); // output : 5 // time complexity O(n)

// Check if a String Contains a Substring
// Problem 8: Given a string and a substring, check if the substring exists in the string.
const isSubstringExist = (str, substr) => {
  for (let i = 0; i < str.length - substr.length; i++) {
    let matchFound = true;
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        matchFound = false;
        break;
      }
    }
    if (matchFound) {
      return true;
    }
  }
  return false;
};

console.log(isSubstringExist("badbutbad", "but")); // output : true // time complexity O(n * m)

// Count the Number of Substring Occurrences
// Problem 9: Count how many times a given substring appears in the string.
const numberOfSubstrOccurance = (str, substr) => {
  let substrOccurance = 0;
  for (let i = 0; i <= str.length - substr.length; i++) {
    let matchFound = true;
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        matchFound = false;
        break;
      }
    }
    if (matchFound) {
      substrOccurance++;
    }
  }
  return substrOccurance;
};

console.log(numberOfSubstrOccurance("hello world hello", "hello")); // output : 2 // time complexity O(n * m)

// Pattern Matching (Naive Approach)
// Problem 10: Implement a simple string matching algorithm (i.e., brute-force approach).
const stringMatching = (str, pattern) => {
  let matchFoundArray = [];
  let z = 0;
  for (let i = 0; i <= str.length - pattern.length; i++) {
    let matchFound = true;
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) {
        matchFound = false;
        break;
      }
    }
    if (matchFound) {
      matchFoundArray[z] = i;
      z++;
    }
  }
  if (matchFoundArray.length) {
    return matchFoundArray;
  }
  return -1;
};

console.log(stringMatching("ABC ABCDAB ABCDABCDABDE", "ABC")); // output : [ 0, 4, 11, 15 ] // time complexity O(n * m)
