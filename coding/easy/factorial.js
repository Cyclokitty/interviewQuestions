// blah blah blah get the factorial

function factorial(num) {
  var total = 1;
  while (num > 1) {
    total *= num;
    num--;
  }
  return total;
}

// or create a range and use .reduce() on that range:

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  let range = [];
  for (let i = num; i >= 1; i--) {
    range.push(i);
  }

  let total = range.reduce((accum, item) => {
    return accum * item;
  }, 1);
  return total;
}

factorial(0)                        // 1
factorial(1)                        // 1
factorial(6)                        // 720
