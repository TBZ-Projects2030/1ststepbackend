const { updateOfficeFastContent, updateOfficeFastContentArb, getAllDataOffice, updateOfficeR2Content, updateOfficeR2ContentArb, updateCorporateFastContent, updateCorporateFastContentArb, update3rdCorporateContent, update3rdCorporateContentArb, update4thCorporateContent, update4thCorporateContentArb, updateFoodFastContent, updateFoodFastContentArb, updatePeopleFastContent, updatePeopleFastContentArb, updateFinancialFastContent, updateFinancialFastContentArb, getAllDataFood, createFoodContent, getAllDataCorporate, createCorporateFastContent, createFoodFinancial, getAllDataFinancial, getAllDataPeople, createFoodPeople, createR2Content, createAndUpdateR2Content, updateR2ContentByPrecedingData, createCorporateR2Content, updateCorporateR2Content, updateCorporateR5Content, createCorporateR5Content, updatePeopleR2Content, createPeopleR2Content, createFoodR2Content, updateFoodR2Content, createOfficeR2ContentObj, updateOfficeR2ContentObj, createFinancialR2Content, updateFinancialR2Content } = require("../controllers/services.controller");
const {
    createUser,
    getUser, 
  } = require("../controllers/user.controllers"); 
  
  const router = require("express").Router();

  router.route("/office/get/all").get(getAllDataOffice);
  router.route("/service/r1/eng/update/office").put(updateOfficeFastContent);
  router.route("/service/r1/arb/update/office").put(updateOfficeFastContentArb);

  router.route("/service/r2/eng/update/office").put(updateOfficeR2Content);
  router.route("/service/r2/arb/update/office").put(updateOfficeR2ContentArb);

  router.route("/office/r2/post").post(createOfficeR2ContentObj); 
router.route("/office/r2/update").put(updateOfficeR2ContentObj); 
// ------
  router.route("/consultation/get/all").get(getAllDataCorporate);
  router.route("/consultation/r2/add").post(createCorporateFastContent);
  router.route("/service/r1/eng/update/consultation").put(updateCorporateFastContent);
  router.route("/service/r1/arb/update/consultation").put(updateCorporateFastContentArb);

  router.route("/consultation/r2/post").post(createCorporateR2Content); 
  router.route("/consultation/r2/update").put(updateCorporateR2Content); 
  router.route("/consultation/r5/update").put(updateCorporateR5Content); 
  router.route("/consultation/r5/post").post(createCorporateR5Content); 

  router.route("/service/r3/eng/update/consultation").put(update3rdCorporateContent);
  router.route("/service/r3/arb/update/consultation").put(update3rdCorporateContentArb);

  router.route("/service/r4/eng/update/consultation").put(update4thCorporateContent);
  router.route("/service/r4/arb/update/consultation").put(update4thCorporateContentArb);
// ----
router.route("/food/get/all").get(getAllDataFood);
router.route("/food/eng/add").post(createFoodContent);
 
router.route("/service/r1/eng/update/food").put(updateFoodFastContent);
router.route("/service/r1/arb/update/food").put(updateFoodFastContentArb);  

router.route("/food/r2/post").post(createFoodR2Content); 
router.route("/food/r2/update").put(updateFoodR2Content); 
// --------
router.route("/people/get/all").get(getAllDataPeople);
router.route("/people/add").post(createFoodPeople);

router.route("/service/r1/eng/update/people").put(updatePeopleFastContent);
router.route("/service/r1/arb/update/people").put(updatePeopleFastContentArb);

router.route("/people/r2/post").post(createPeopleR2Content); 
router.route("/people/r2/update").put(updatePeopleR2Content); 

// ---------
router.route("/financial/get/all").get(getAllDataFinancial);
// router.route("/financial/add").post(createFoodFinancial);

router.route("/service/r1/eng/update/financial").put(updateFinancialFastContent);
router.route("/service/r1/arb/update/financial").put(updateFinancialFastContentArb);

router.route("/financial/r2/post").post(createFinancialR2Content); 
router.route("/financial/r2/update").put(updateFinancialR2Content); 
  
 
 
  
  
  module.exports = router;