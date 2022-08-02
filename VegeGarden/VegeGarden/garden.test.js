const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getRevenueForCrop,

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

    //test with 2 factors: sun medium and wind high w? yes 1 aug very good job
    test("getYieldForPlant with 2 factors sun medium and wind high", () => {
        const environmentFactors = {
            sun: "medium",
            wind: "high",
        };
        expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(1.60);

    }); /*test*/

}); //desc

//end getYieldForplant--------------------------------------------

//start getYieldForCrop--------------------------------------------
describe("testing getYieldForCrop", () => {
    test("Get yield for crop simple", () => {
        const input = {
            crop: corn,
            numCrops: 4,
        } /*const*/
        expect(getYieldForCrop(input)).toBe(120.00);

    }); /*test*/

    test("Get yield for crop sun low , wind medium", () => {
        const environmentFactors = {
            sun: "low",
            wind: "medium",
        };

        const crops = {
            crop: pumpkin,
            numCrops: 8,
        } /*const*/
        expect(getYieldForCrop(crops, environmentFactors)).toBe(17.92);

    }); /*test*/
}); /*des*/
// end getYieldForCrop
//start getTotalYield

describe("get total yield with multiple crops", () => {

    test("total yield with multiple crops", () => {
        const crops = [
            { crop: corn, numCrops: 9 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(278);
    }); //test

    test("total yield with numCrops is 0 amount", () => {
        const crops = [
            { crop: corn, numCrops: 0 },

        ];
        expect(getTotalYield({ crops })).toBe(0);
    }); //test

    test("total yield with multiple crops en 1 factor sun high", () => {
        const environmentFactors = {
            sun: "high",
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 3 },
        ];


        expect(getTotalYield({ crops }, environmentFactors)).toBe(243.00);
    }); //test

    test("total yield with multiple crops en 1 factor sun high", () => {
        const environmentFactors = {
            sun: "high",
            wind: "medium"
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 3 },
        ];


        expect(getTotalYield({ crops }, environmentFactors)).toBe(170.10);
    }); //test

});
//end totalYieldForCrops
//start getRevenueForCrop
describe("get revenue for crops", () => {
    test('get revenue for crop no factor', () => {
        const crops = {
            crop: corn,
            numCrops: 7
        };

        expect(getRevenueForCrop(crops)).toBe(420.00);
    }); //test


}); /*de*/