/*
======================
LINKED LISTS
======================
*/
//Node
export class Node {
  constructor(element, nextNode = undefined) {
    this.element = element;
    this.nextNode = nextNode;
  }
}

//List
export class LinkedList {
  constructor() {
    this.size = 0;
    this.head = undefined;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getNodeAt(index) {
    if (!(index >= 0 && index < this.getSize())) {
      throw new Error("Index is out of range");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  indexOf(element) {
    let currentNode = this.head;
    for (let i = 0; i < this.getSize(); i++) {
      currentNode = currentNode.nextNode;
      if (currentNode.element === element) {
        return i;
      }
    }
    return -1;
  }

  insert(element, index) {
    if (!(index >= 0 && index <= this.getSize())) {
      throw new Error("Index is out of range");
    }
    const node = new Node(element);
    if (index === 0) {
      [node.nextNode, this.head] = [this.head, node];
    } else {
      let previousNode = this.getNodeAt(index - 1);
      let currentNode = previousNode.nextNode;
      [previousNode.nextNode, node.nextNode] = [node, currentNode];
    }
    this.size++;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  removeAt(index) {
    if (index === 0) {
      const removed = this.head;
      this.head = this.head.nextNode;
      this.size--;
      return removed.element;
    }
    const currentNode = this.getNodeAt(index - 1);
    const removedNode = currentNode.next;
    currentNode.next = removedNode.next;
    return removedNode.element;
  }

  push(element) {
    if (!this.head) {
      this.head = new Node(element, this.head);
    } else {
      let currentNode = this.head;
      for (let i = 0; i < this.getSize() - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(element);
    }
    this.size++;
  }

  toString(separator = "") {
    if (!this.isEmpty()) {
      let objString = `${this.head.element}`;
      let current = this.head.nextNode;
      for (let i = 1; i < this.getSize(); i++) {
        objString += `${separator}${current.element}`;
        current = current.nextNode;
      }
      return objString;
    }
    return "";
  }
}