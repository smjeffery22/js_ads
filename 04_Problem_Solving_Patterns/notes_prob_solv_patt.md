# Problem Solving Patterns

## Frequency Counters

- Uses objects or sets to collect values/frequencies of values
  - Break down arrays/strings into objects
  - Compare the objects

## Anagrams

- Given two strings, determine if the second string is an anagram of the first

- An anagram is a word, phrase or name form by rearranging the letters of another
  - ex. cinema formed from iceman

## Multiple Pointers

- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
  - Pointer is a just variable
    - ex. specific location in an array or a string (index)

- Very efficient for solving problems with minimal space complexity as well

- Write a function called sumZero, which accepts a *sorted* array of integers
  - Function should find the first pair where the sum is 0
  - Return an array that includes both values that sum to zero
  - Return undefined if a pair does not exist

- Write a function called countUniqueValues, which accepts a *sorted* array
  - Function counts the unique values in the array
  - There can be negative numbers in the array

## Sliding Window

- Pattern involves creating a window which can either be an array or number from one position to another

- Depending on a certain condition, the window either increases or closes
  - New window is created

- Useful for keeping track of a subset of data in array/string, etc.

- Function to find the longest sequence of unique characters
  - ex. "hellothere" => "lother"

- Write a function called maxSubarraySum, which accepts an array of integers and a number called n
  - Function should calculate the maximum sum of n consecutive elements in the array

