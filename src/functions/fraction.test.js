import { fraction } from "./fraction";

test("1/2 is equal 0.5", () => {
  expect(fraction(1, 2)).toEqual(0.5);
})
