const square_root = require('./square')

test("square root of 3 is 1.7320508075688772", () => {
    expect(square_root(3)).toBe(1.7320508075688772);
});