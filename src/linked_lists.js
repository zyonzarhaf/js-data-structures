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

// Test insertFront
ll.insertFront(10);
ll.insertFront(20);
ll.insertFront(30);
console.log('After insertFront: ');
ll.printListData(); // 30, 20, 10

// Test insertBack
ll.insertBack(40);
console.log('After insertBack: ');
ll.printListData(); // 30, 20, 10, 40

// Test insertAt
ll.insertAt(50, 2);
console.log('After insertAt: ');
ll.printListData(); // 30, 20, 50, 10, 40

// Test removeFirst
console.log('Removed first element: ', ll.removeFirst()); // 30
console.log('After removeFirst: ');
ll.printListData(); // 20, 50, 10, 40

// Test removeLast
console.log('Removed last element: ', ll.removeLast()); // 40
console.log('After removeLast: ');
ll.printListData(); // 20, 50, 10

// Test removeAt
console.log('Removed element at index 1: ', ll.removeAt(1)); // 50
console.log('After removeAt: ');
ll.printListData(); // 20, 10

// Test peekBack
console.log('Peek back: ', ll.peekBack()); // 10

// Test peekFront
console.log('Peek front: ', ll.peekFront()); // 20

// Test peekAt
console.log('Peek at index 1: ', ll.peekAt(1)); // 10
