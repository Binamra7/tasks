// Task 3:  Write a function that takes an array of positive integers and returns the
// length of the longest chain of consecutive numbers. A chain is defined as a sequence
// of numbers in the array where each number is exactly one more than the previous number in the sequence,
// and the sequence can be in any order in the array. Also explain the time complexity and space complexity.  (Take-Home)

// Sample input:  [1, 2, 3, 3, 4, 5, 6, 9, 4, 2] output: 4

const longestChain = (nums) => {
  if (nums.length <= 1) return nums.length;

  let maxChain = 1;
  let currChain = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      currChain++;
      maxChain = Math.max(maxChain, currChain);
    } else {
      currChain = 1;
    }
  }

  return maxChain;
};

console.log(longestChain([1, 2, 3, 3, 4, 5, 6, 9, 4, 2]));

// Total time complexity: O(n)
// Total space complexity: O(1)
