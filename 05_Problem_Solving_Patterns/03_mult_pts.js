// Multiple Pointers

// Write a function called sumZero, which accepts a *sorted* array of integers
// Function should find the first pair where the sum is 0
// Return an array that includes both values that sum to zero
// Return undefined if a pair does not exist

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i ++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }
// time complexity => O(N^2)
// space complexity => O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// time complexity => O(N)
// space complexity => O(1)

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4])); // [-4, 4]
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]

// Write a function called countUniqueValues, which accepts a *sorted* array
//  Function counts the unique values in the array
//  There can be negative numbers in the array

// function countUniqueValues(arr) {
// 	const obj = {};

// 	for (const el of arr) {
// 		obj[el] = (obj[el] || 0) + 1;
// 	}

// 	return Object.keys(obj).length;
// }

// start with two pointers
// compare two values by looping
//  if same value, increment second pointer
//  if different value, increment first pointer and replace value

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

	let i = 0;

	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}

	return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3])); // 3
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
