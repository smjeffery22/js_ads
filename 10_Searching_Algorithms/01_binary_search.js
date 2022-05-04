// Binary Search

// function accepts a sorted array and a value
// create two pointers at each end of the array
// while left < right pointer
//  create a pointer in the middle
//  if value found
//    return index
//  if value too small
//    move the left pointer up
//  if value too large
//    move the right pointer down
//  if value not found
//    return -1
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== val && left <= right) {
    if (arr[middle] > val) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }

    middle = Math.floor((left + right) / 2);
  }

  if (arr[middle] === val) {
    return middle;
  }

  return -1;
}

console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6));// -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100));// -1
