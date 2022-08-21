import { sum } from "../src/controllers/sum.controller";

test("test sum 1", () => {
    const result = sum(1,2);
    const a = {
        a: "a",
        b: "b"
    }
    console.log(a);
    
    expect(result).toBe(3);
});