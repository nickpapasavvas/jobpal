const getDiameter = require("./array-diameter");

// The function presumes that the function receives an array of numbers (int)
// it does not handle cases where the array contains other data types  such as
// null, undefined, strings, objects, etc.
// It is also presumed that the array does not contain holes (eg: [1, ,2])
// If the user story wants that cases to be covered, tell me and I will add them

describe("getDiameter()", () => {
  describe("when array is [-2, -5, 7, -10, 3, 9, -4]", () => {
    it("returns 19", () => {
      expect(getDiameter([-2, -5, 7, -10, 3, 9, -4])).toBe(19);
    });
  });
  describe("when array is [1, 1, 1, 1, 1]", () => {
    it("returns 0", () => {
      expect(getDiameter([1, 1, 1, 1, 1])).toBe(0);
    });
  });
  describe("when array contains less than 2 integers", () => {
    it("returns 'Array should contain at least two integers'", () => {
      expect(getDiameter([1])).toBe(
        "Array should contain at least two integers"
      );
    });
  });
});
