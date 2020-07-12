import { count, add, minus } from "../core/counter";

//le counter est egal a zero
// le counter s'incremente de 1
// le counter vaut 1 il s'incremente de 2
// le counter diminue

describe("counter qui  s'incremente ou decremente", () => {
  test("counter qui s'increment", () => {
    let _count = count;
    expect(count).toEqual(0);
  });

  test("increment", () => {
    let _count = count;
    _count = add(_count);
    expect(_count).toEqual(1);
  });

  test("decrement", () => {
    let _count = count;
    _count = minus(_count);
    expect(_count).toEqual(-1);
  });
});
