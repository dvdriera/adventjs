import isValid from "./index.js";

test("regalos y parentesis bien cerrados", () => {
  const letter = "bici coche (balón) bici coche peluche";
  expect(isValid(letter)).toBeTruthy();
});

test("parentesis al inicio bien cerrados", () => {
  const letter = "(muñeca) consola bici";
  expect(isValid(letter)).toBeTruthy();
});

test("regalos y parentesis mal cerrados", () => {
  const letter = "bici coche (balón bici coche";
  expect(isValid(letter)).toBeFalsy();
});

test("regalos y parentesis mal cerrados 2", () => {
  const letter = "(peluche {) bici";
  expect(isValid(letter)).toBeFalsy();
});

test("parentesis vacios", () => {
  const letter = "() bici";
  expect(isValid(letter)).toBeFalsy();
});

test("tres parentesis", () => {
  const letter = "(a) (b) (c)";
  expect(isValid(letter)).toBeTruthy();
});
