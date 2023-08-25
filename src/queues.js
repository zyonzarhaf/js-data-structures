/*
===========================
QUEUE DATA STRUCTURE
===========================
*/
//Using objects && es6+ class syntax
class objQueue {
  constructor() {
    this.firstIndex = 0;
    this.index = 0;
    this.items = {};
  }

  isEmpty() {
    return this.index === 0;
  }

  size() {
    return this.index;
  }

  //FIFO STUFF
  peekFront() {
    if (!this.isEmpty()) {
      return this.items[this.firstIndex];
    } else {
      return undefined;
    }
  }

  addBack(element) {
    this.items[this.index] = element;
    this.index++;
  }

  removeFirst() {
    if (!this.isEmpty()) {
      const removed = this.items[this.firstIndex];
      if (this.size() > 1) {
        for (let i = 0; i < this.index; i++) {
          this.items[i] = this.items[i + 1];
        }
        this.index--;
        delete this.items[this.index];
      } else {
        this.clear();
      }
      return removed;
    } else {
      return undefined;
    }
  }

  //utils
  toString(separator = "") {
    if (!this.isEmpty()) {
      let queueString = `${this.items[this.firstIndex]}`;
      for (let i = 1; i < this.index; i++) {
        queueString += `${separator}${this.items[i]}`;
      }
      return queueString;
    } else {
      return "";
    }
  }

  reverse() {
    let lastItem = this.index - 1;
    console.log(lastItem);
    for (let prop in this.items) {
      if (prop < lastItem) {
        [this.items[prop], this.items[lastItem]] = [
          this.items[lastItem],
          this.items[prop],
        ];
        lastItem--;
      }
    }
  }

  clear() {
    this.firstIndex = 0;
    this.index = 0;
    this.items = {};
  }
}

const myQueue = new objQueue();

myQueue.addBack("ana");
myQueue.addBack("bruno");
myQueue.addBack("carlos");
myQueue.addBack("dora");
myQueue.addBack("emanuel");
console.log(myQueue.items);

myQueue.reverse();
console.log(myQueue.items);
