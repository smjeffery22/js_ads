// Anagrams

// Given two strings, determine if the second string is an anagram of the first
// An anagram is a word, phrase or name form by rearranging the letters of another

function validAnagram(str1, str2) {
	// add whatever parameters you deem necessary - good luck!
	if (str1.length !== str2.length) {
		return false;
	}

	if (str1 === str2) {
		return true;
	}

	const obj1 = {};
	const obj2 = {};

	for (const char of str1) {
		obj1[char] = (obj1[char] || 0) + 1;
	}

	for (const char of str2) {
		obj2[char] = (obj2[char] || 0) + 1;
	}

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

console.log(validAnagram('cinema', 'iceman'));
