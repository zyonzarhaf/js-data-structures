/*
===========================
STACK DATA STRUCTURE
===========================
*/
// Using objects
class Stack {
  constructor() {
    this.index = 0;
    this.items = {};
  }

  isEmpty() {
    return this.index === 0;
  }

  getSize() {
    return this.index;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.index - 1];
    }
    return undefined;
  }

  push(element) {
    this.items[this.index] = element;
    this.index++;
  }

  pop() {
    if (!this.isEmpty()) {
      const removed = this.items[this.index - 1];
      delete this.items[this.index - 1];
      this.index--;
      return removed;
    }
    return undefined;
  }

  toString() {
    if (!this.isEmpty(separator)) {
      let stackString = `${this.items[0]}`;
      for (let i = 1; i < this.index; i++) {
        stackString += `${separator}${this.items[i]}`;
      }
      return stackString;
    }
    return undefined;
  }

  reverse() {
    let firstIndex = 0;
    let lastIndex = this.index - 1;
    for (let i = 0; i < lastIndex; i++) {
      [this.items[firstIndex], 
      this.items[lastIndex]]
      = 
      [this.items[lastIndex],
      this.items[firstIndex]];
      firstIndex++;
      lastIndex--;
    }
  }

  clear() {
    this.index = 0;
    this.items = {};
  }
}

// Dec to binary
const decToBinary = function (value) {
  let dec = value;
  let rem;
  const stack1 = new Stack();
  const stack2 = new Stack();

  while (dec > 0) {
    rem = Math.floor(dec % 2);
    dec = Math.floor(dec / 2);
    stack1.push(rem);
  }

  while (!stack1.isEmpty()) {
    stack2.push(stack1.pop());
  }

  return stack2.toString();
};

// Dec to anything from base 2 to 36
const baseConverter = function (value, base) {
  if (!(base >= 2 && base <= 36)) {
    return "must be a base value from 2 to 36";
  }
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let rem;
  let val = value;
  const stack1 = new Stack();
  const stack2 = new Stack();

  while (value > 0) {
    rem = Math.floor(val % base);
    val = Math.floor(val / base);
    stack1.push(rem);
  }

  while(!stack1.isEmpty()) {
    stack2.push(stack1.pop());
  }
  
  let baseString = `${digits[stack2.items[0]]}`;
  for (let i = 1; i < stack2.index; i++) {
    baseString += `,${digits[stack2.items[i]]}`;
  }
  return baseString;
};  
