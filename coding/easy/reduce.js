// implement the .reduce()

function useReduce(arr) {
  return arr.reduce((accum, item) => {
    return accum + item;
  }, 0);
}

const range = [10, 20, 30, 40, 50];
useReduce(range);
