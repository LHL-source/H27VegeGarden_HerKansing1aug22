//yetYielfForCrop w ? yes amazing really amazing way to go girl thumb up
// const getYieldForCrop_1 = (cropData) => {
//     //console.log('koek in function', koek); //w?y
//     // console.log('koekYield_1', koek.input.crop.yield); //w? y
//     const cropDataYield = cropData.input.crop.yield; //w? y
//     console.log('cropDataYield', cropDataYield);
//     const cropDataNumCrops = cropData.input.numCrops;
//     console.log('cropDataNumCrops', cropDataNumCrops); //w?y

//     const result = cropDataYield * cropDataNumCrops; //w? y
//     console.log('result', result); //w? y

//     return result;

// };
// const resultYieldCrop = getYieldForCrop(yieldcropData());
// console.log('resultYieldCrop', resultYieldCrop);
// end yetYielfForCrop-------------------------------------------------

//yieldcropData w? yes good job----------------------------------------
// const yieldcropData = () => {
//     const corn = {
//         name: "corn",
//         yield: 3,
//     };
//     const input = {
//         crop: corn,
//         numCrops: 10,
//     };
// const cornName = corn.name;
//  console.log('cornName ', cornName); //W? y

// const inputNumCrops = input.numCrops; //W.y
//console.log('inputNumCrops: ', inputNumCrops);
// return {
//     //corn,
//     input,
// };
// };
// const resultYieldCrop = getYieldForCrop_1(yieldcropData());
// console.log('resultYieldCrop', resultYieldCrop);
// const resultData = yieldcropData();
// console.log('resultData', resultData);
//end yieldcropData---------------------------------------------------

//start test getTotalYield works? yes amazing job--------------------------------------
// const getTotalYield_1 = (cropsObj) => {
//         console.log('cropsData in func getTotalYield_1', cropsObj); //w? yes amazing job

//         const cornYield = cropsObj.crops[0].crop.yield; //w?y
//         console.log('cornYield ', cornYield); //w?y
//         const cornNumCrops = cropsObj.crops[0].numCrops; //w?y
//         console.log('cornNumCrops ', cornNumCrops); //w? y
//         const cornYieldNumCrops = cornYield * cornNumCrops; //w? y
//         console.log('cornYieldNumCrops  ', cornYieldNumCrops); //w? y

//         const pumpkinYield = cropsObj.crops[1].crop.yield; //w? not yet
//         console.log('pumpkinYield', pumpkinYield); // W?not yet
//         const pumpkinNumCrops = cropsObj.crops[1].numCrops; //w?y
//         console.log('pumpkinNumCrops ', pumpkinNumCrops); //w/y
//         const pumpkinYieldNumCrops = pumpkinYield * pumpkinNumCrops; //w? y
//         console.log('pumpkinYieldNumCrops  ', pumpkinYieldNumCrops); //w? y

//         const resultYieldCrop = cornYieldNumCrops + pumpkinYieldNumCrops; //wy
//         console.log(' resultYieldCrop  ', resultYieldCrop); //w? y

//         return resultYieldCrop
//     } //getTotalY
//end test gettotalYield-------------------------------------------------------

//test getTotalYieldData w? good job-----------------------------------------
// const getTotalYieldData = () => {
//     const corn = {
//         name: "corn",
//         yield: 3,
//     }; //corn
//     const pumpkin = {
//         name: "pumpkin",
//         yield: 4,
//     }; //pumpkin
//     const crops = [
//         { crop: corn, numCrops: 5 },
//         { crop: pumpkin, numCrops: 2 },
//     ];
//     return {
//         crops,
//     }
// }; //getTotal
// const yieldPrint = getTotalYield_1(getTotalYieldData());
// console.log('yieldResultPrint', yieldPrint);


//start getCostForCrop works? yes good job--------------------------------------
// const getCostForCrop = (input) => {
//         console.log('typeOf', typeof input); //w? yes good job
//         console.log('input inside func', input); //w? y
//         console.log('input.numCrops', input.input.numCrops);
//         const costOnePlant = 1;
//         const costCorn = input.input.numCrops * costOnePlant;
//         //const costPumpkin = cropsObj_1.pumpkin.numCrop * costOnePlant;
//         const sumCost = costCorn;
//         console.log('sumCost', sumCost);
//         return sumCost //resultYieldCrop
//     } //getTotalY
// end  getCostForCrop----------------------------------------------

//test getTotalYieldData w? good job--------------------------------
// const getCostForCropData = () => {
//     const corn = {
//         name: "corn",
//         yield: 3,
//     }; //corn
//     const input = {
//         crop: corn,
//         numCrops: 10,
//     };

//     return {
//         input
//     }
// }; //getTotal
// const costPrint = getCostForCrop(getCostForCropData());
// console.log('costPrint ', costPrint);
//end getTotalYieldData--------------------------------------------