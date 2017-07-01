What the fudge is memoization?
==========
[From](https://addyosmani.com/blog/faster-javascript-memoization/)

* remembering the results for inputs of a specific value to a function

[From](http://inlehmansterms.net/2015/03/01/javascript-memoization/)

* function calls cached so that the result can be returned next time the function is called with the same arguments

```

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

```

Let's use the classic factorial function, recursive style!

```
function factorial(num) {
  if (num === 1) return num;

  return num * factorial(num - 1);
}

factorial(5);  // 120

```

And we memoize:

```
var factorial = memoize(function(num) {
  console.log('working for factorial(' + num +  ')');
  if (num === 1) return 1;
  return num * factorial(num - 1);
  });

/*
  working for factorial(5)
  working for factorial(4)
  working for factorial(3)
  working for factorial(2)
  working for factorial(1)
  => 120
*/

```
