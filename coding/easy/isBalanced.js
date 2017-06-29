// takes a string and returns true or false indicating whether its curly braces are balanced.

function isBalanced(str) {
  var countBracs = 0;
  str = str.split('');
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '{' || str[i] === '}') {
      countBracs++;
    }
  }
  if (countBracs % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// or with .filter():

function isBalanced(str) {
  str = str.split('');

  const onlyBracs = str.filter(item => {
    return item === '{' || item === '}' ;
  });

  if (onlyBracs.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }')       // false
isBalanced('foo { bar } }')           // false
