// These problems involve more complex string operations and can be solved using techniques like sorting, hashing, and two-pointer approaches.

// Run-Length Encoding
// Problem 1: Implement run-length encoding for a given string (e.g., "aabbbcccc" → "a2b3c4").

const runLengthEncoding = (str) => {
  let encodedString = "";
  let char = str[0];
  let charCount = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== char) {
      encodedString += char + charCount;
      char = str[i];
      charCount = 1;
    } else charCount++;
  }
  encodedString += char + charCount;
  return encodedString;
};
console.log(runLengthEncoding("aabbbcccc")); // output : a2b4c5 // time complexity O(n)

// String Compression
// Given a string, compress it by replacing repeated characters with the character followed by the count of the repetition.

// String Decompression
// Given a compressed string (e.g., "a2b3c4"), decompress it back to the original string.
const stringDecompression = (str) => {
  let decodedString = "";
  let char = "";
  let charCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      charCount = charCount * 10 + (str[i] - "0");
    } else {
      if (char !== "") {
        let count = charCount;
        while (count > 0) {
          decodedString += char;
          count--;
        }
      }
      char = str[i];
      charCount = 0;
    }
  }
  if (char !== "") {
    let count = charCount;
    while (count > 0) {
      decodedString += char;
      count--;
    }
  }

  return decodedString;
};
console.log(stringDecompression("a2b10c4")); // output : aabbbbbbbbbbcccc // time complexity O(n + m)

// Check if Two Strings are Anagrams
// Given two strings, check if they are anagrams of each other.

// Find All Anagrams in a String
// Given a string and a pattern, find all the starting indices of the pattern’s anagrams in the string.

// Group Anagrams
// Given an array of strings, group anagrams together.

// Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.

// Longest Palindromic Substring
// Find the longest palindromic substring in a given string.

// Find the Longest Common Prefix
// Given an array of strings, find the longest common prefix among them.

// Check if String is a Subsequence of Another
// Given two strings, check if the second string is a subsequence of the first string.

// KMP (Knuth-Morris-Pratt) Algorithm
// Implement the KMP string matching algorithm for finding a substring in a string.

// Rabin-Karp Algorithm
// Implement the Rabin-Karp algorithm for substring searching.
