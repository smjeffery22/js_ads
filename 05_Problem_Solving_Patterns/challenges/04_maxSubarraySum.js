// function takes an array of integers and a number
// find the maximum sum of a subarray
//  with the length of the number passed to the function

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;

  let maxSum = 0;
  let temp = 0;

  // add the first n consecutive numbers in array
  //  loop through the array from 0 to n
  //  store in a variable 'maxSum'
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  // start 'temp' same as 'maxSum'
  temp = maxSum;

  // loop through the array from index n
  //  subtract the first element of the previous loop from maxSum
  //  add nth element to the maxSum
  //  store to variable 'temp'
  // if temp > maxSum
  //  maxSum = temp
  for (let j = n; j < arr.length; j++) {
    temp = temp - arr[j - n] + arr[j];

    if (temp > maxSum) {
      maxSum = temp;
    }
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
