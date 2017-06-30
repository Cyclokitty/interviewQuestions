// implement the .filter()

function useFilter(arr) {
  return arr.filter((item) => {
    return item !== 'goose';
  });
}

const range = ['cat', 'dog', 'hammy', 'pig', 'goose'];
useFilter(range);

// we don't want goose. who would?
