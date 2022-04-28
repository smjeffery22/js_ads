// functions takes in two strings
// check if the characters in the first string
//  form a subsequence of the characters in the second string

function isSubsequence(str1, str2) {
	// make an empty string
	let subs = '';

	// have two pointers starting at 0
	let i = 0;
	let j = 0;

	// loop through the second string
	// if str1[i] === str2[j]
	//  add character to the empty string
  //  increment both pointers
	while (j < str2.length) {
		if (str1[i] === str2[j]) {
			subs += str2[j];
			i++;
			j++;
		} else {
			j++;
		}
    
		//  if str1 === subs => return true
		if (str1 === subs) {
			return true;
		}
	}

	//  if str1 !== subs => return false
	return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
