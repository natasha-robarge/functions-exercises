// TODO: add your solutions here!

//Concat function


var concatWords = (wordOne, wordTwo) => {
  return wordOne + wordTwo;
};

//Repeat a phrase

function repeatPhrase(num, phrase) {
  for(var i = 0; i <= num; i++) {
    console.log(phrase);
  }
}

function powerToTheNth(num, n) {
  var sum;
    for(var i = 1; i <= n; i++) {
      sum = num * i;
    }
  return sum;
}

function getAreaOfCircle(radius) {
  return Math.PI * (radius * radius);
}

function getPythagoreanTheorem(a, b) {
  return Math.pow(a, 2) + Math.pow(b, 2);
}

function isEvenlyDisvisibleByY(x, y) {
  if (x % y === 0) {
    return true;
  }
  return false;
}

function countNumOfVowels(string) {
  let vowelStr = 'aeiouyAEIOUY';
  //This string will be a check for both lower and uppercase vowels
  let count = 0;
  //count will be where we store each increment if a vowel is found.

    for(var i = 0; i < string.length; i++) {
      //we run through the length of the string given.
      if(vowelStr.indexOf(string[i]) !== -1) {
        //if the vowelStr index of string at the position of i exists, increment count.
        //if the vowel isn't found, return count. If it's found, return count.
        count++;
      }
    }
  return count;
}


function findWdi(arr){
	return arr.some(function(element) {
	  if(element === 'wdi') {
	    return true;
	  } else {
	    return false;
	  }
	});
	}


function findLongestWord(sentence) {
  var splitSentence = sentence.split(' ');
    return splitSentence.reduce(function(longest, current) {
      return current.length > longest.length ? current : longest;
    }, '');
}

function printTriangle(length) {
	for (var i = 0; i < length; i++) {
    var star = "";
    for (var j = 0; j <= i; j++)
      star += "*";
    console.log(star);
  }
}

function flipCoin() {
  var answer = prompt("Heads or tails?");
    let chance = Math.floor(Math.random() * 2);
      if(chance <= 1) {
        console.log("You picked " + answer + " but got heads instead.");
      } else if (chance > 1 && chance <= 2) {
        console.log("You picked " + answer + " but got tails instead.");
      }
}
console.log(flipCoin());

function printPyramid(length) {
	for(var x = 0; x < length; x++) {
	  var str = ' ';
	    for(var y = 0; y <= length - x; y++) {
	      str += '* ';
	      for(var z = 0; z <= x; z++) {
	        str += '* ';
	      }
	    console.log(str);
	    }
	}
}
console.log(printPyramid(10))
