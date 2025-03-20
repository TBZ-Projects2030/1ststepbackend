const { createAboutFastContent, updateAboutFastContent, updateAboutFastContentArb, updateAboutSecondContent, updateAboutSecondContentArb, updateAbout3rdContent, updateAbout3rdContentArb, updateAbout4thContent, updateAbout4thContentArb, updateAbout5thContent, updateAbout5thContentArb, getAllDataAboutContact } = require("../controllers/about.controllers");
const { getAllDataContact, createContactFastContent, updateContactFastContent, updateContactFastContentArb, updateContactSecondContent, updateContactSecondContentArb } = require("../controllers/contact.controllers");
const { createFastContent, updateFastContent, getAllDataHome, updateFastContentArb, updateSecondContentArb, updateSecondContent, update3rdContent, update3rdContentArb, update4thContent, update4thContentArb, update5thContent, update5thContentArb, update6thContent, update6thContentArb, update7thContent, update7thContentArb, update8thContent, update8thContentArb, update9thContent, update9thContentArb, update10thContent, update10thContentArb } = require("../controllers/home.controllers");
const { createJoinFastContent, updateJoinFastContent, updateJoinFastContentArb, updateJoinSecondContent, updateJoinSecondContentArb, getAllDataJoin } = require("../controllers/join.controllers");
 
  
  const router = require("express").Router();
  
  router.route("/home/get/all").get(getAllDataHome);
  router.route("/home/banner/eng/add").post(createFastContent);

  router.route("/home/banner/eng/update").put(updateFastContent);
  router.route("/home/banner/arb/update").put(updateFastContentArb);

  router.route("/home/second/eng/update").put(updateSecondContent);
  router.route("/home/second/arb/update").put(updateSecondContentArb);

  router.route("/home/3rd/eng/update").put(update3rdContent);
  router.route("/home/3rd/arb/update").put(update3rdContentArb);

  router.route("/home/4th/eng/update").put(update4thContent);
  router.route("/home/4th/arb/update").put(update4thContentArb);

  router.route("/home/5th/eng/update").put(update5thContent);
  router.route("/home/5th/arb/update").put(update5thContentArb);

  router.route("/home/6th/eng/update").put(update6thContent);
  router.route("/home/6th/arb/update").put(update6thContentArb);

  router.route("/home/7th/eng/update").put(update7thContent);
  router.route("/home/7th/arb/update").put(update7thContentArb);

  router.route("/home/8th/eng/update").put(update8thContent);
  router.route("/home/8th/arb/update").put(update8thContentArb);

  router.route("/home/9th/eng/update").put(update9thContent);
  router.route("/home/9th/arb/update").put(update9thContentArb);

  router.route("/home/10th/eng/update").put(update10thContent);
  router.route("/home/10th/arb/update").put(update10thContentArb);

// ----
  router.route("/about/get/all").get(getAllDataAboutContact);
  router.route("/about/1st/eng/add").post(createAboutFastContent);
  router.route("/about/1st/eng/update").put(updateAboutFastContent);
  router.route("/about/1st/arb/update").put(updateAboutFastContentArb);

  router.route("/about/2nd/eng/update").put(updateAboutSecondContent);
  router.route("/about/2nd/arb/update").put(updateAboutSecondContentArb);

  router.route("/about/3rd/eng/update").put(updateAbout3rdContent);
  router.route("/about/3rd/arb/update").put(updateAbout3rdContentArb);

  router.route("/about/4th/eng/update").put(updateAbout4thContent);
  router.route("/about/4th/arb/update").put(updateAbout4thContentArb);

  router.route("/about/5th/eng/update").put(updateAbout5thContent);
  router.route("/about/5th/arb/update").put(updateAbout5thContentArb);

  // ----
  router.route("/join/get/all").get(getAllDataJoin);
  router.route("/join/1st/eng/add").post(createJoinFastContent);
  router.route("/join/1st/eng/update").put(updateJoinFastContent);
  router.route("/join/1st/arb/update").put(updateJoinFastContentArb);

  router.route("/join/2nd/eng/update").put(updateJoinSecondContent);
  router.route("/join/2nd/arb/update").put(updateJoinSecondContentArb);
 
   // ----
 router.route("/contact/get/all").get(getAllDataContact);
 router.route("/contact/1st/eng/add").post(createContactFastContent);
 router.route("/contact/1st/eng/update").put(updateContactFastContent);
 router.route("/contact/1st/arb/update").put(updateContactFastContentArb);

 router.route("/contact/2nd/eng/update").put(updateContactSecondContent);
 router.route("/contact/2nd/arb/update").put(updateContactSecondContentArb);
  
  
  
  module.exports = router;
  