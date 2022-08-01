//start getYieldForPlant
const getYieldForPlant = (input, factor) => {
    if (!factor) {
        return input.yield
    }; //!factor

    //add only the effect of sun
    let sun;
    let wind;
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
        }; //switch
    }; //else

    //calculate the effect of only wind
    if (!input.factors.wind) {
        wind = 1;
    } /*if*/
    else {
        switch (factor.wind) {
            case "low":
                wind = (100 + input.factors.wind.low) / 100;
                break;
            case "medium":
                wind = (100 + input.factors.wind.medium) / 100;
                break;
            case "high":
                wind = (100 + input.factors.wind.high) / 100;
                break;
            default:
                wind = 1;
        }; /*switch*/

    }; /*else*/

    console.log("sun ,wind:", sun, wind);
    const yieldPerPlant = input.yield * sun * wind;
    console.log("yield per plant: ", yieldPerPlant);
    return parseFloat(yieldPerPlant.toFixed(2));
}; //const getYieldForPlant
//end getYieldForPlant-- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//start getYieldForCrop W? yes 1 aug 22 good job-----------------------------------------
const getYieldForCrop = (input, factor) => {
    const yieldPerPlant = getYieldForPlant(input.crop, factor);
    const yieldPerCrop = yieldPerPlant * input.numCrops;
    return parseFloat(yieldPerCrop.toFixed(2));
};







module.exports = {
    getYieldForPlant,
    getYieldForCrop,

};