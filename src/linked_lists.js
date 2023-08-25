/*
======================
LINKED LISTS
======================
*/

//Node
class Node {
  constructor(element, nextNode = undefined) {
    this.element = element;
    this.nextNode = nextNode;
  }
}

//List
class LinkedList {
  constructor() {
    this.size = 0;
    this.head = undefined;
  }

  insertFront(element) {
    this.head = new Node(element, this.head);
    this.size++;
  }

  insertBack(element) {
    if (!this.head) {
      this.head = new Node(element, this.head);
    } else {
      let currentNode = this.head;
      for (let i = 0; i < this.size - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(element);
    }
    this.size++;
  }

  insertAt(element, index) {
    if (!(index >= 0 && index <= this.size)) {
      throw new Error('Index is out of range');
    } else {
      const node = new Node(element);
      let currentNode = this.head;
      let previousNode;
      if (index === 0) {
        node.nextNode = currentNode;
        this.head = node;
      } else {
        for (let i = 0; i < index; i++) {
          [previousNode, currentNode] = [currentNode, currentNode.nextNode];
        }
        [previousNode.nextNode, node.nextNode] = [node, currentNode];
      }
      this.size++;
    }
  }

  removeFirst() {
    if (!this.head) return undefined;

    const removed = this.head;
    this.head = this.head.nextNode;
    this.size--;
    return removed.element;
  }

  removeLast() {
    if (!this.head) return undefined;

    if (this.size === 1) {
      const removed = this.head;
      this.head = undefined;
      this.size--;
      return removed.element;
    }

    let currentNode = this.head;
    let previousNode;
    for (let i = 0; i < this.size - 1; i++) {
      [currentNode, previousNode] = [currentNode.nextNode, currentNode];
    }

    const removed = currentNode;
    previousNode.nextNode = undefined;
    this.size--;
    return removed.element;
  }

  removeAt(index) {
    if (!(index >= 0 && index <= this.size)) {
      throw new Error('Index is out of range');
    } else {
      if (index === 0) {
        const removed = this.head;
        this.head = this.head.nextNode;
        this.size--;
        return removed.element;
      } else {
        let currentNode = this.head;
        let previousNode;
        for (let i = 0; i < index; i++) {
          [previousNode, currentNode] = [currentNode, currentNode.nextNode];
        }
        const removed = currentNode;
        if (index === this.size - 1) {
          previousNode.nextNode = undefined;
        } else {
          previousNode.nextNode = currentNode.nextNode;
        }
        this.size--;
        return removed.element;
      }
    }
  }

  peekBack() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    for (let i = 0; i < this.size - 1; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.element;
  }

  peekFront() {
    if (!this.head) return undefined;

    return this.head.element;
  }

  peekAt(index) {
    if (!this.head) return undefined;

    if (!(index >= 0 && index <= this.size)) {
      throw new Error('Index is out of range');
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      return currentNode.element;
    }
  }

  printListData() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.nextNode;
    }
  }
}

const ll = new LinkedList();