// Sliding Window

// Write a function called maxSubarraySum, which accepts an array of integers and a number called n
//  Function should calculate the maximum sum of n consecutive elements in the array

// function maxSubarraySum(arr, num) {
//   if (num > arr.length) return null;

//   // if arr has all negative number, biggest sum would also be negative
//   let max = -Infinity;

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0; // temp sum to compare with max

//     // add 3 consecutive numbers as iterating over arr
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }

//     if (temp > max) {
//       max = temp;
//     }
//   }

//   return max;
// }
// O(N^2)
// not good for a large array and number

// add consecutive numbers and save it in a variable
// to add next consecutive numbers, subtract the first element from the above variable
//  add the next element
//  sliding over
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;
  
  // add n consecutive numbers
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // for loop starting at num
  //  subtract first value from previous consecutive numbers
  //  add arr[currnetIndex]
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
// O(N)

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)); // 8 + 5 + 6 = 19