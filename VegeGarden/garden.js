//start getYieldForPlant
const getYieldForPlant = (input, factor) => {
    if (!factor) {
        return input.yield
    };

    return parseFloat(yieldInclFac.toFixed(2));
};
//add only the effect of sun
let sun;
if (!input.factors.sun) {
    sun = 1;
} else {
    switch (factor.sun) {
        case "low":
            sun = (100 + input.factors.sun.low) / 100;
            break;
        case "medium":
            sun = (100 + input.factors.sun.medium) / 100;
            break;
        case "high":
            sun = (100 + input.factors.sun.high) / 100;
            break;
        default:
            sun = 1;
    } //switch
}

//end getYieldForPlant-- -- -- -- -- -- -- -- -- -- -- -- -- -- --






module.exports = {
    getYieldForPlant,

};