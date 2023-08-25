/*
===========================
STACK DATA STRUCTURE
===========================
*/
//Using objects && es6+ class syntax
class objStack {
  constructor() {
    this.index = 0;
    this.items = {};
  }

  isEmpty() {
    return this.index === 0;
  }

  size() {
    return this.index;
  }

  //LIFO stuff
  peekBack() {
    if (!this.isEmpty()) {
      return this.items[this.index - 1];
    } else {
      return undefined;
    }
  }

  addBack(element) {
    this.items[this.index] = element;
    this.index++;
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

  //utils
  toString() {
    if (!this.isEmpty()) {
      let stackString = `${this.items[0]}`;
      for (let i = 1; i < this.index; i++) {
        stackString += `,${this.items[i]}`;
      }
      return stackString;
    } else {
      return undefined;
    }
  }

  reverse() {
    let firstIndex = 0;
    for (let i = 0; i < this.index; i++) {
      [this.items[firstIndex], this.items[this.index - 1]] = [
        this.items[this.index - 1],
        this.items[firstIndex],
      ];
      firstIndex++;
      this.index--; //will mess w/ index value
    }
    this.index = firstIndex + this.index; //restore index value
  }

  clear() {
    this.index = 0;
    this.items = {};
  }
}

//Dec to binary w/ this approach
const decToBinary = function (value) {
  let dec = value;
  let rem;

  const remStack = new objStack();
  while (dec > 0) {
    rem = Math.floor(dec % 2);
    dec = Math.floor(dec / 2);
    remStack.addBack(rem);
  }

  remStack.reverse();

  const binaryString = remStack.toString();

  console.log(binaryString);

  return binaryString;
};

decToBinary(324);

//Dec to anything from base 2 to 36
const baseConverter = function (val, base) {
  if (!(base >= 2 && base <= 36)) {
    return 'must be a base value from 2 to 36';
  } else {
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let value = val;
    let rem;

    //fill and reverse the stack
    const baseStack = new objStack();
    while (value > 0) {
      rem = Math.floor(value % base);
      value = Math.floor(value / base);
      baseStack.addBack(rem);
    }
    baseStack.reverse();

    //get base string
    let baseString = `${digits[baseStack.items[0]]}`;
    for (let i = 1; i < baseStack.index; i++) {
      baseString += `,${digits[baseStack.items[i]]}`;
    }

    console.log(baseString);

    return baseString;
  }
};

baseConverter(15790288, 16); //F0F0D0 hex num

//Using arrays
class arrStack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  //LIFO stuff
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

  //utils
  toString() {
    return this.items.toString();
  }

  reverse() {
    this.items.reverse();
  }

  clear() {
    this.items = [];
  }
}

//Dec to binary w/ this approach
const arrDecToBinary = function (value) {
  let dec = value;
  let rem;

  const remStack = new arrStack();
  while (dec > 0) {
    rem = Math.floor(dec % 2);
    dec = Math.floor(dec / 2);
    remStack.addBack(rem);
  }
  remStack.reverse();

  const binaryString = remStack.toString();

  console.log(binaryString);

  return binaryString;
};

arrDecToBinary(431);

//Dec to anything from base 2 to 36
const arrBaseConverter = function (val, base) {
  if (!(base >= 2 && base <= 36)) {
    return 'must be a base value from 2 to 36';
  } else {
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let value = val;
    let rem;

    const baseStack = new arrStack();
    while (value > 0) {
      rem = Math.floor(value % base);
      value = Math.floor(value / base);
      baseStack.addBack(rem);
    }
    baseStack.reverse();

    let baseString = `${digits[baseStack.items[0]]}`;
    for (let i = 1; i < baseStack.size(); i++) {
      baseString += `,${digits[baseStack.items[i]]}`;
    }

    console.log(baseString);

    return baseString;
  }
};

arrBaseConverter(25100328, 16);
