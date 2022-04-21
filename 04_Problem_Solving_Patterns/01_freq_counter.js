// Frequency Counter

// Write a function called 'same', which accepts two arrays
// Function should return true if every value in the array has its corresponding value squared in the second array
// The frequency of values must be the same

// same([1, 2, 3], [4, 1, 9]) => true
// same([1, 2, 3], [1, 9]) => false
// same([1, 2, 1], [4, 4, 1]) => false (must be same frequency)

// function same (arr1, arr2) {
//   // if the two arrays are the the same length, end
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     // find index of first array's element squared in second array
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);

//     // if not found in second array, end
//     if (correctIndex === -1) {
//       return false;
//     }
//     // remove that element from second array if found
//     arr2.splice(correctIndex, 1)
//   }
// }

// O(N^2) because indexOf inside the for loop is also a loop
//  nested loops => quadratic

function same (arr1, arr2) {
  // if the two arrays are the the same length, end
  if (arr1.length !== arr2.length) {
    return false;
  }

  // create two objects to break down the arrays
  const obj1 = {};
  const obj2 = {};

  for (const el of arr1) {
    obj1[el] = (obj1[el] || 0) + 1;
  }

  for (const el of arr2) {
    obj2[el] = (obj2[el] || 0) + 1;
  }

  // compare the two objects
  for (const el in obj1) {
    if (!(el ** 2 in obj2)) {
      return false;
    }

    if (obj1[el] !== obj2[el ** 2]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]))
console.log(same([1, 2, 3], [1, 9]))
console.log(same([1, 2, 1], [4, 4, 1]))