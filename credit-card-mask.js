// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// My Solution:

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }


function maskify(cc) {
    var word = cc;
    if (word.length <=4) {
      return word
    } else {
      var masked = word.substring(0, word.length - 4).replace(/[a-z\d]/gi,"#") + 
      word.substring(word.length - 4, word.length)
      return masked;
    }
  }