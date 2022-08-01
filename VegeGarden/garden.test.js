const {
    getYieldForPlant,

} = require("./garden");

const {
    corn,
    pumpkin
} = require("./Vegetable");
//getYieldForPlant  ----------------------------------------------
describe("getYieldForPlant No Environment factors ", () => {
    const corn = {
        name: "cumcumber",
        yield: 5,
    };
    //test getYieldForplant no environ w? yes good job
    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(cucumber)).toBe(5);
    }); //test


    //test getYieldForplant with only 1 factor in this case sun high
    test(" getYieldForplant with only 1 factor in this case sun high"), () => {
        const environmentFactors = {
            sun: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    }
}); //desc
//end getYieldForplant--------------------------------------------