// function accepts a variable number of arguments
// checks whether there are any duplicates among the arguments passed in

// frequency counter
// function areThereDuplicates(...args) {
// 	// ...args creates an an array with each argument as element
// 	// create an object
// 	const obj = {};

// 	// store each argument as key and count the number of occurences
// 	for (const el of args) {
// 		obj[el] = (obj[el] || 0) + 1;
// 	}

// 	// loop through object and check if any of the values is > 1
// 	//  if yes => return true
// 	//  if no  => return false
// 	for (const key in obj) {
// 		if (obj[key] > 1) {
// 			return true;
// 		}
// 	}

// 	return false;
// }
// time => O(N)
// space => O(N)

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
