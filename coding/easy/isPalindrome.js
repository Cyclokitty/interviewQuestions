// returns true or false indicating whether the given string is a palidrome (case and space insensitive)

function isPalindrome(str) {
  let word = str.toLowerCase().replace(/\s/g, '');
  let pali = str.toLowerCase().replace(/\s/g, '').split('').reverse().join('');

  if (word === pali) {
    return true;
  } else {
    return false;
  }
}


isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
isPalindrome('abcd')                            // false
isPalindrome('A man a plan a canal Panama')     // true
