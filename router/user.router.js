const {
  createUser,
  getUser, 
} = require("../controllers/user.controllers"); 

const router = require("express").Router();

router.route("/signup").post(createUser);
router.route("/login").post(getUser); 

// router.route('/update/profile/:email').put(
//   upload.single("avatar"), 
//   updateProfileImage);  


module.exports = router;
