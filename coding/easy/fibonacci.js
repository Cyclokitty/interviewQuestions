// returns the nth fibo

function fib(num) {
  if (num === 0 || num === 1) return num;

  let fibRange = [0, 1, 1];
  for (var i = 2; i < num; i++) {
    fibRange.push(fibRange[i] + fibRange[i - 1]);
  }
  return fibRange[num];
}

fib(0)                              // 0
fib(1)                              // 1
fib(10)                             // 55
fib(20)                             // 6765
