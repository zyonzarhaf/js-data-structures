/*
=======================
DECK DATA STRUCTURE
=======================
*/
//Using objects && es6+ class syntax
class objDeck {
  constructor() {
    this.index = 0; //4
    this.firstIndex = 0;
    this.items = {};
  }

  isEmpty() {
    return this.index === 0;
  }

  size() {
    return this.index;
  }

  //head stuff
  peekFront() {
    if (!this.isEmpty()) {
      return this.items[this.firstIndex];
    } else {
      return undefined;
    }
  }

  addFront(element) {
    for (let i = this.index; i > this.firstIndex; i--) {
      this.items[i] = this.items[i - 1]; //shift positions
    }
    this.items[this.firstIndex] = element;
    this.index++; //set prop to be further occupied
  }

  removeFront() {
    if (!this.isEmpty()) {
      const removed = this.items[this.firstIndex];
      if (this.size() > 1) {
        for (let i = this.firstIndex; i < this.index - 1; i++) {
          this.items[i] = this.items[i + 1];
        }
        delete this.items[this.index - 1]; //remove duplicate
        this.index--;
      } else {
        this.index = 0;
        this.items = {};
      }
      return removed;
    } else {
      return undefined;
    }
  }

  //tail stuff
  peekBack() {
    if (!this.isEmpty()) {
      return this.items[this.index - 1];
    } else {
      return undefined;
    }
  }

  addBack(...element) {
    for (let e of element) {
      this.items[this.index] = e;
      this.index++;
    }
  }

  removeBack() {
    if (!this.isEmpty()) {
      const removed = this.items[this.index - 1];
      delete this.items[this.index - 1];
      this.index--;
      return removed;
    } else {
      return undefined;
    }
  }

  clear() {
    this.index = 0;
    this.firstIndex = 0;
    this.items = {};
  }
}

const myDeck = new objDeck();
console.log(myDeck);

myDeck.addBack('michael', 'douglas', 'anna', 'bella');
console.log(myDeck);

myDeck.removeBack();
console.log(myDeck);

myDeck.addFront('jordan');
console.log(myDeck);

myDeck.removeFront();
console.log(myDeck);

//Palindrome checker w/ this approach
const palindromeChecker = function (name) {
  const toLowerCase = name.toLowerCase().split(' ').join(''); //normalize the string
  const myDeck = new objDeck();
  let isPalindrome = true;

  for (let e of toLowerCase) {
    myDeck.addBack(e);
  }

  while (isPalindrome && myDeck.size() > 1) {
    const firstChar = myDeck.removeFront();
    const lastChar = myDeck.removeBack();
    if (firstChar !== lastChar) {
      isPalindrome = false;
    }
  }

  console.log(
    `${toLowerCase} ${isPalindrome ? 'is a' : 'is not a'} palindrome!`
  );

  return isPalindrome;
};

console.log('hello from obj palindrome checker');
palindromeChecker('anna');
palindromeChecker('josiah');

//Using arrays
class arrDeck {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  //head stuff
  peekFront() {
    if (!this.isEmpty()) {
      return this.items[0];
    } else {
      return undefined;
    }
  }

  addFront(element) {
    this.items.unshift(element);
  }

  removeFront() {
    return this.items.shift();
  }

  //tail stuff
  peekBack() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    } else {
      return undefined;
    }
  }

  addBack(element) {
    this.items.push(element);
  }

  removeBack() {
    return this.items.pop();
  }

  clear() {
    this.items = [];
  }
}

//Palindrome checker w/ this approach
const arrPalindromeChecker = function (name) {
  const toLowerCase = name.toLowerCase().split(' ').join('');
  let isPalindrome = true;
  const myDeck = new arrDeck();
  let i = 0;

  while (i < toLowerCase.length) {
    myDeck.addBack(toLowerCase[i]);
    i++;
  }

  while (isPalindrome && myDeck.size() > 1) {
    const firstChar = myDeck.removeFront();
    const lastChar = myDeck.removeBack();
    if (firstChar !== lastChar) {
      isPalindrome = false;
    }
  }

  console.log(
    `${toLowerCase} ${isPalindrome ? 'is a' : 'is not a'} palindrome!`
  );

  return isPalindrome;
};

console.log('hello from array palindrome checker');
arrPalindromeChecker('adda');
arrPalindromeChecker('peleghrini');
