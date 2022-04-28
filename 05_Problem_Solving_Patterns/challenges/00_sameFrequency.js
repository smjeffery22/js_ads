// given two positive integers
// find it two numbers have the same frequency of digits

function sameFrequency(num1, num2) {
	num1 = num1.toString();
	num2 = num2.toString();

	// if two numbers do not have the same number of digits]
	//  return false
	if (num1.length !== num2.length) {
		return false;
	}

	// make two objects to store frequency of digits for each number
	// compare two objects
	const obj1 = {};
	const obj2 = {};

	for (const char of num1) {
		obj1[char] = (obj1[char] || 0) + 1;
	}

	for (const char of num2) {
		obj2[char] = (obj2[char] || 0) + 1;
	}

	//  check if each key in one object is contained in the other object
	//    if no, return false
	//    if yes, compare the values to see if they match
	//      if no, return false
	//      if yes, return true
	for (const key in obj1) {
		if (!(key in obj2)) {
			return false;
		}

		if (obj1[key] !== obj2[key]) {
			return false;
		}
	}

	return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
