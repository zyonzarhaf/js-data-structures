/*
===========================
QUEUE DATA STRUCTURE
===========================
*/
export default class Queue {
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

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.firstIndex];
    } else {
      return undefined;
    }
  }

  enqueue(element) {
    this.items[this.index] = element;
    this.index++;
  }

  dequeue() {
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

  toString(separator = "") {
    if (!this.isEmpty()) {
      let queueString = `${this.items[this.firstIndex]}`;
      for (let i = 1; i < this.index; i++) {
        queueString += `${separator}${this.items[i]}`;
      }
      return queueString;
    }
    return "";
  }

  reverse() {
    let lastItem = this.index - 1;
    for (let i = 0; i < this.index && i < lastItem; i++) {
      [this.items[i], this.items[lastItem]] = [
        this.items[lastItem],
        this.items[i],
      ];
      lastItem--;
    }
    return this.items;
  }

  clear() {
    this.firstIndex = 0;
    this.index = 0;
    this.items = {};
  }
}
