import sum from "./sum";
test("Testing the sum function", () => {
    expect(sum(1, 2)).toBe(3);
})

test("Testing the sum function2", () => {
    let a =10;
    let b = 20;
    let output = a + b;
    expect(sum(a, b)).toBe(output);
}
)
