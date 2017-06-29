// takes an unsorted array of unique numbers (ie no repeats) and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: there's a clever formula you can use.

function missing(arr) {
  let largest = arr[0];
  let sum = 0;

  // first you need to sum up the nums in arr and find the largest num
  arr.map(num => {
    sum += num;
    if (num > largest) {
      largest = num;
    }
  });

  // to find the missing num, add largest + 1, multiply that by largest, then divide the result by 2
  let diff = largest * (largest + 1) / 2;
  let missing = diff - sum;

  if (missing > 0) {
    return missing;
  } else {
    return undefined;
  }

}

missing([1, 4, 3]);
missing([1, 2, 3, 4]);
missing([15, 11, 14, 12, 10, 8, 9, 6, 7, 4, 5, 1, 3, 2]);

missing([1, 4, 3])                  // 2
missing([5, 1, 4, 2])               // 3
missing([1, 2, 3, 4])               // undefined
