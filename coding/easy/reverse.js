// reverse a given string BUT DO NOT USE .reverse()

function reverse(str) {
  str = str.split('');
  let revWord = [];
  for (var i =  str.length; i--;) {
    revWord.push(str[i]);
  }
  return revWord.join('');
}


reverse('')                         // ''
reverse('abcdef')                   // 'fedcba'
