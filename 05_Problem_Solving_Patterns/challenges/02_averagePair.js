// given a sorted array of integers and a target average
// determine if there is a pair of values in the array
//  where the average of the pair === target average

function averagePair(arr, num) {
	// if array is empty
	//  return false
	if (arr.length === 0) return false;

	// create two pointers
	//  one starting at [0]
	//  another starting at arr.length - 1
	let i = 0;
	let j = arr.length - 1;

	// while i < j
	//  if arr[i] + arr[j] < (avg * 2)
	//    i++
	//  if arr[i] + arr[j] > (avg * 2)
	//    j--
	//  if arr[i] + arr[j] === (avg * 2)
	//    return true
	while (i < j) {
		let avg = (arr[i] + arr[j]) / 2;

		if (avg === num) {
      return true;
    } else if (avg < num) {
      i++;
    } else {
      j--;
    }
	}

	// return false outside the while loop
	return false;
}

console.log(averagePair([1, 2, 3, 4, 5], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
