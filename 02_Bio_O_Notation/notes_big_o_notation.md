# Big O Notation

- Numeric representation of the *performance of the code*
  - To analyze the performance of an algorithm

- To determine which function is the best
  - When there are multiple implementations of the same function

- High level understanding of the time/space complexity of an algorithm
  - Only depends on the algorithm, not the hardware used to run the algorithm

- Does not care about precision, just the general trends (constant, linear, quadratic, logarithmic)

## Timing Our Code

- Measuring performance with time is problematic:
  - Different machines will record different times
  - Same machines will record different times
  - Measurements may not be precise enough for fast algorithms

### Counting Operations

- Count number of simple operations the computer has to perform

- The following code has 5n + 2 operations:
  - 1 assignment (total = 0)
  - 1 assignment (let i = 1)
  - n comparisons (i <= n)
  - n additions and n assignments (i++)
  - n additions and n assignments (total += 1)
```js
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}
```

- The following code has 3 operations:
  - *, +, /
  - Do not care about variable
```js
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo2(6));
```

## Big O Expressions - Time Complexity

- How the runtime of an algorithm grows as the inputs grow
  - Relationship between input size and the time relative to that input
  
### Time Complexity - Rules-of-Thumb

- Constants do not matter
  - O(500)             => O(1)
  - O(2n)              => O(n)
  - O(2n + 10)         => O(n)
  - O(13n^2)           => O(n^2)
  - O(5n^2 + 5n + 8)   => O(n^2)

### Big O Shorthands

- Arithmetic operations (+, -, *, /) are constant

- Variable assignment is constant

- Accessing elements in an array or objects is constant

- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
  - loop * loop

### Logarithms

- Logarithm time complexity is great
  - Similar graph shape to O(1)

- Certain *searching algorithms* have logarithmic time complexity

- Efficient *sorting algorithms* involve logarithms

- *Recursion* sometimes involves logarithmic space complexity

## Big O Expressions - Space Complexity

- How much additional memory need to be allocated in order to run the code in algorithm

- Ignore the space taken up by inputs (auxiliary space complexity)
    - Space required by the algorithm, not including space taken up by the inputs

### Space Complexity - Rules-of-Thumb

- Most primitives (numbers, booleans, undefined, null) are constant space O(1)

- Strings require O(n) space (where n is the string length)

- Reference types are generally O(n), where:
  - n is the length for arrays
  - n is the number of keys for objects

