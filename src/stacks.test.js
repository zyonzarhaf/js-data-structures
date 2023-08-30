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

    it("returns false for a non-empty-string", () => {
      stack.push(1);
      expect(stack.isEmpty()).toBeFalsy();
    });
  });

  describe("getSize()", () => {
    it("returns the size of the stack to equals 0", () => {
      expect(stack.getSize()).toBe(0);
    });

    it("returns the size of the stack to equals 3", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.getSize()).toEqual(3);
    });
  });

  describe("peek()", () => {
    it("returns undefined for an empty stack", () => {
      expect(stack.peek()).toBe(undefined);
    });

    it("returns the last element from the stack to equals 3", () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toEqual(3);
    });
  });
});
