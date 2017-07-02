for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}

// this only prints out 4

for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}

// let is block level declaration

// or try:

(function looper(num) {
  console.log(num);
  if (num < 10) {
    setTimeout(function() {
      looper(++num);
    }, 1000);
  }
}(0));

// IIFE the settimeout and the for loop
