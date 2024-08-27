import { sum } from "../sum";

test('This will retiurn the sum of two number', () => {
    const ans = sum(1,3);
    // Assertion
    expect(ans).toBe(4);
})
