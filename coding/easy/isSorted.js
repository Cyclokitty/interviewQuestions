// returns true or false indicating whether the given array of numbers is sorted

function isSorted(arr) {
  // make a copy of arr. Need arr to compare the order of the sorted checkSort
  let sortArr = Array.from(arr);
  let checkSort = sortArr.sort((a, b) => {
    return a - b;
  });

  // here we compare the length of the original arr and checkSort
  if (arr.length !== checkSort.length)
    return false ;

  // here we return false the moment values in either arr or checkSort are different
  for (var i = arr.length;  i--;) {
    if (arr[i] !== checkSort[i]) {
      return false;
    }
  }
  // otherwise, return true. The items are the same and in the same order
  return true;
}

isSorted([])                        // true
isSorted([-Infinity, -5, 0, 3, 9])  // true
isSorted([3, 9, -3, 10])            // false
