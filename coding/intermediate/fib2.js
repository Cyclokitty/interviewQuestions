// fib2 - Like the fib function you implemented above, able to handle numbers up to 50 (hint: look up memoization).

function memoize(func) {
  var cache = {};
  return function() {
    var key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    }
    else {
      var val = func.apply(this, arguments);
      cache[key] = val;
      return val;
    }
  };
}


var fib2 = memoize(function(num) {
  if (num === 0 || num === 1) return num;

  let fibRange = [0, 1, 1];
  for (var i = 2; i < num; i++) {
    fibRange.push(fibRange[i] + fibRange[i - 1]);
  }
  return fibRange[num];
});

fib2(50)
//  12586269025

// or using recursion:

var fib3 = memoize(num => {
  if (num === 0 || num === 1) return num;
  else return fib3(num - 1) + fib3(num - 2);
});
