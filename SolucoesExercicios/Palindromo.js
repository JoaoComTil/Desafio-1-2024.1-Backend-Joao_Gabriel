function palindrome(str) {

  str = str.match(/[a-z0-9]/ig);
  let stringOriginal = str.join('').toLowerCase();
  let stringReversa = str = str.reverse().join('').toLowerCase();

  if (stringOriginal === stringReversa)
    return true;

  return false;
}



console.log(palindrome("_12eye"));