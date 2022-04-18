# Analyzing Performance of Arrays and Objects

## Big O of Objects

- Unordered, key-value pairs

- Fast access, insertion and removal of data
  - O(1) => access, insertion, removal
    - hasOwnProperty()
      - returns boolean
  - O(N) => searching
    - Object.keys()
    - Object.values()
    - Object.entries()
    - all 3 methods above create array
      - uses look for copying n elements from object to array

## Big O of Arrays

- Ordered lists

- O(1)    => access
  - When array is accessing an element at certain index, it can access directly without going through the whole array
- O(N)    => searching
  - Need to check every element in the array
- Depends => insertion, removal

### Array Insertion

- Adding/removing an element to the end of an array is O(1)
  - Just adding/removing an index (increment/decrement) and value at the end
  - .push() and .pop()

- Adding/removing an element to the beginning of an array is O(N)
  - Indices of the array need to be rearranged
    - Need to perform a task for every element in the array
  - .shift(), .unshift()

### Big O of Array Operations

#### O(1)

- .push()
- .pop()

#### O(N)

- .shift()
- .unshift()
- .concat()
- .slice()
- .splice()
- .forEach / .map() / .filter() / .reduce() / etc.

#### O(N * log N)

 - .sort()
