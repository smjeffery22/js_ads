// Divide and Conquer

// Given a sorted array of integers
// Write a function called search that accepts a value
// Returns the index where the value passed to the function is located
// If value not found, return -1

// linear search
//   start from the beginning of the array and loop through
// function search(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) return i;
//   }

//   return -1;
// }
// O(N)

// binary search
//  start from the middle of the array
//  check if the value is > or < than element
//  can ignore half of the array since it is sorted array
//  start from middle every search

function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] < num) {
      min = middle + 1;
    } else if (arr[middle] > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(search([1,2,3,4,5,6], 4))  // 3
console.log(search([1,2,3,4,5,6], 6))  // 5
console.log(search([1,2,3,4,5,6], 11)) // -1
