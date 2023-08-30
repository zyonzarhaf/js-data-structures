import { Stack } from "./stacks";

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe("isEmpty()", () => {
    it("returns true for an empty stack", () => {
      expect(stack.isEmpty()).toBeTruthy();
    });

    it("returns false for a non-empty stack", () => {
      stack.push(1);
      expect(stack.isEmpty()).toBeFalsy();
    });
  });

  describe("getSize()", () => {
    it("returns the number of elements in the stack", () => {
      expect(stack.getSize()).toBe(0);
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.getSize()).toEqual(3);
    });
  });

  describe("peek()", () => {
    it("returns the top element of the stack", () => {
      expect(stack.peek()).toBeUndefined();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.peek()).toEqual(3);
    });
  });

  describe("push(element)", () => {
    it("adds an element to the top of the stack", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.peek()).toEqual(3);
    });
  });

  describe("pop()", () => {
    it("returns undefined for an empty stack", () => {
      expect(stack.pop()).toBeUndefined();
    });

    it("removes the top element from the stack and returns it", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toBe(3);
    });
  });
});
