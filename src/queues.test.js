import Queue from "./queues";

describe("Queue", function () {
  let queue;

  beforeEach(function () {
    queue = new Queue();
  });

  describe("isEmpty", function () {
    it("should return true for an empty queue", function () {
      expect(queue.isEmpty()).toBe(true);
    });

    it("should return false for a non-empty queue", function () {
      queue.enqueue(1);
      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe("size", function () {
    it("should return the size of the queue", function () {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.size()).toBe(3);
    });
  });

  describe("peek", function () {
    it("should return the first element of the queue", function () {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toBe(1);
    });
  });

  describe("enqueue", function () {
    it("should add an element to the end of the queue", function () {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.toString(",")).toBe("1,2");
    });
  });

  describe("dequeue", function () {
    it("should remove and return the first element of the queue", function () {
      queue.enqueue(1);
      expect(queue.dequeue()).toBe(1);
    });
  });

  describe("toString", function () {
    it("should convert the queue to a string using a separator that defaults to empty string", function () {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.toString()).toBe("123");
    });
  });

  describe("reverse", function () {
    it("should reverse the order of elements in the queue", function () {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.reverse()).toEqual({
        0: 3,
        1: 2,
        2: 1,
      });
    });
  });
});
