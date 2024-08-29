const countSmallerNums = (nums) => {
  let len = nums.length;
  let ans = new Array(len).fill(0);

  for (let i = 0; i < len; i++)
    for (let j = i + 1; j < len; j++) if (nums[i] > nums[j]) ans[i]++;
  return ans;
};

let arr = [4, 5, 7, 2, 8, 4, 6, 9];
console.log(countSmallerNums(arr));

// Output: [1, 2, 3, 0, 2, 0, 0, 0]
// Time Complexity: O(n^2)
// Space Complexity: O(n)
