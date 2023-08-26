import { LinkedList } from "./linked_lists";

describe("LinkedList", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe("new LinkedList()", () => {
    it("creates an empty list", () => {
      expect(linkedList).toEqual({
        size: 0,
        head: undefined,
      });
    });
  });

  describe("isEmpty()", () => {
    it("returns true for an empty list", () => {
      expect(linkedList.isEmpty()).toBeTruthy();
    });

    it("returns false for a non-empty list", () => {
      linkedList.push(1);
      expect(linkedList.isEmpty()).toBeFalsy();
    });
  });

  describe("getSize()", () => {
    it("returns the correct size of the list", () => {
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);
      expect(linkedList.getSize()).toBe(3);
    });

    it("returns 0 for an empty list", () => {
      expect(linkedList.getSize()).toBe(0);
    });
  });

  describe("getHead()", () => {
    it("returns undefined for an empty list", () => {
      expect(linkedList.getHead()).toBeUndefined();
    });

    it("returns the head node for a non-empty list", () => {
      linkedList.push(1);
      expect(linkedList.getHead()).toEqual({
        element: 1,
        nextNode: undefined,
      });
    });
  });

  describe("getNodeAt(index)", () => {
    it("returns a node at a specific (logical) index", () => {
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);
      expect(linkedList.getNodeAt(1)).toEqual({
        element: 2,
        nextNode: {
          element: 3,
          nextNode: undefined,
        },
      });
    });
  });

  describe("push(element)", () => {
    it("adds an element to the end of the list", () => {
      linkedList.push(1);
      linkedList.push(2);
      expect(linkedList.getNodeAt(1)).toEqual({
        element: 2,
        nextNode: undefined,
      });
      expect(linkedList.getSize()).toBe(2);
    });
  });

  describe("insert(element, index)", () => {
    it("inserts an element at a specific (logical) index", () => {
      linkedList.insert(1, 0);
      linkedList.insert(2, 1);
      linkedList.insert(3, 2);
      expect(linkedList.getNodeAt(0)).toEqual({
        element: 1,
        nextNode: {
          element: 2,
          nextNode: {
            element: 3,
            nextNode: undefined,
          },
        },
      });
      expect(linkedList.getNodeAt(1)).toEqual({
        element: 2,
        nextNode: {
          element: 3,
          nextNode: undefined,
        },
      });
      expect(linkedList.getNodeAt(2)).toEqual({
        element: 3,
        nextNode: undefined,
      });
    });
  });

  describe("toString(separator)", () => {
    it("returns stringified elements from the list", () => {
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);
      expect(linkedList.toString(",")).toBe("1,2,3")
    })
  });
});
