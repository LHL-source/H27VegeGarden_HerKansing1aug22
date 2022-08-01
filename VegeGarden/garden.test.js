const {
    getYieldForPlant,

} = require("./garden");

const {
    corn,
    pumpkin
} = require("./Vegetable");
//getYieldForPlant  ----------------------------------------------
describe("getYieldForPlant No Environment factors ", () => {

    //test getYieldForplant no environ w? yes on 1aug good job
    test("Get yield for plant with no environment factors", () => {

        const cucumber = {
            name: "cucumber",
            yield: 5,
        };

        expect(getYieldForPlant(cucumber)).toBe(5);
    }); //test


    //test getYieldForplant with only 1 factor in this case sun high w? yes on 1 aug good job
    test(" getYieldForplant with only 1 factor in this case sun high", () => {
        const environmentFactors = {
            sun: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    }); //test

    //test with 2 factors: sun medium and wind high
    test("getYieldForPlant with 2 factors sun medium and wind high", () => {
        const environmentFactors = {
            sun: "medium",
            wind: "high",
        };
        expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(1.60);

    }); /*test*/

}); //desc
//end getYieldForplant--------------------------------------------