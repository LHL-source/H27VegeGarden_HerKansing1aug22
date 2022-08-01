//start getYieldForPlant
const getYieldForPlant = (input, factor) => {
    if (!factor) {
        return input.yield
    }; //!factor

    //add only the effect of sun
    let sun;
    if (!input.factors.sun) {
        sun = 1;
    } /*!input.factors.sun*/
    else {
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
    } //else

    console.log("sun :", sun);
    const yieldPerPlant = input.yield * sun;
    console.log("yield per plant: ", yieldPerPlant);
    return parseFloat(yieldPerPlant.toFixed(2));
}; //const getYieldForPlant
//end getYieldForPlant-- -- -- -- -- -- -- -- -- -- -- -- -- -- --





module.exports = {
    getYieldForPlant,

};