const { createFromContact, getAllContactFromData, createFromJoin, suscribeNewsletter, getAllJoinFromData, createConsult } = require("../controllers/form.controllers");
const { createUser, getUser } = require("../controllers/user.controllers");

const router = require("express").Router();

router.route("/contact/consult").post(createConsult);
router.route("/contact/add").post(createFromContact);
router.route("/contact/get").get(getAllContactFromData);

router.route("/join/add").post(createFromJoin);
router.route("/join/subscribe").post(suscribeNewsletter);
router.route("/join/get").get(getAllJoinFromData);

// router.route('/update/profile/:email').put(
//   upload.single("avatar"),
//   updateProfileImage);

module.exports = router;
