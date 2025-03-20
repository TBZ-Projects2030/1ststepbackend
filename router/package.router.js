const { createPackages, findPackages, updateDataPackageOffer, addDataPackageOffer, deleteDataPackageOffer, updateDataPackage } = require("../controllers/package.controllers");
 
  
  const router = require("express").Router();
  
  router.route("/create/package/single").post(createPackages);

  router.route("/offer/add/:id").post(addDataPackageOffer); 
  router.route("/find/:service/:name").get(findPackages); 
  router.route("/offer/delete/:id").put(deleteDataPackageOffer); 

  router.route("/offer/update/:id").put(updateDataPackageOffer); 

  router.route("/package/:id/update").put(updateDataPackage); 

   

  
  
  
  
  module.exports = router;