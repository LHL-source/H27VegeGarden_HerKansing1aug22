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
//end getYieldForCrop

//start getTotalYield W? on 1 aug22 yes good job/
const getTotalYield = (input, factor) => {
    //console.log("getTotalYieldinput, factor: ", input, factor);
    const yieldPerCrop = input.crops.map((crop) =>
        getYieldForCrop(crop, factor));

    const totalYield = yieldPerCrop.reduce((acc, cur) => acc + cur);
    return parseFloat(totalYield.toFixed(2));

}; //geTotalYield
//end getTotalYield
//start getRevenueForCrop W? y good job 2-8
const getRevenueForCrop = (input, factor) => {
    const revenueForOnePlant = input.crop.salesPrice * getYieldForPlant(input.crop, factor);
    const revenueForCrop = revenueForOnePlant * input.numCrops;
    return revenueForCrop;
};
//end getRevenueForCrop
//start getCostForCrop w? yes 2-8 good job
const costsForOnePlant = 1;
const getCostForCrop = (input) => {
    // console.log('getCostForcrop input:', input);
    const totalCosts = input.numCrops * costsForOnePlant;
    // console.log("total costs for one crop", totalCosts);
    return totalCosts;

}; //const
//end getCostForCrop
//start getProfitForCrop w? yes 2-8 good job
const getProfitForCrop = (input, factor) => {
    console.log("getProfitForCrop_1", input, factor)
    const profitForCrop = getRevenueForCrop(input, factor) - getCostForCrop(input);
    console.log("profit for a crop:", profitForCrop);
    return parseFloat(profitForCrop.toFixed(2));

}; //const

//start getTotalProfit w? yes very good job 3 aug
const getTotalProfit = (input, factor) => {
    console.log("getTotalProfit before .map, input and factor:", input, factor);

    const profitPerCrop = input.map((crop) => getProfitForCrop(crop, factor));
    // console.log(".map crop en factor:", crop, factor);
    console.log("getProfitForCrop_2(crop, factor):", getProfitForCrop);
    console.log("profitPerCrop:", profitPerCrop);

    const totalProfit = profitPerCrop.reduce((acc, cur) => acc + cur);
    console.log("totale winst van alle crops;", totalProfit);
    return parseFloat(totalProfit.toFixed(2));

}; //const


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getRevenueForCrop,
    getCostForCrop,
    getProfitForCrop,
    getTotalProfit
};