const mathCalc = require("./ex");

test("should multiply two numbers", () => {
  expect(mathCalc.multiply(2, 2)).toBe(4);
});

test("should add two numbers", () => {
  expect(mathCalc.add(2, 2)).toBe(4);
});

test("should subtract two numbers", () => {
  expect(mathCalc.subtract(2, 2)).toBe(0);
});
