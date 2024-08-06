import { sum } from "./sum"

test("The sum of 1 + 2 is equal to 3", () => {
  expect(sum(1, 2)).toEqual(3)
})
