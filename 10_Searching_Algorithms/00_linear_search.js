// Linear Search

// function accepts an array and a value
// loop through the array
// check if the current array element === value
//  if found, return index
//  if not, return -1
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}
// time => O(N)


console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5
console.log(linearSearch([100], 100)) // 0
console.log(linearSearch([1,2,3,4,5], 6)) // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)) // -1
console.log(linearSearch([100], 200)) // -1
