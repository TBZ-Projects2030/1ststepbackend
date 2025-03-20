const userModels = require("../models/user.models");
const { generateToken } = require("../utils/token");
let bcrypt = require("bcryptjs");

//  response
const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    console.log(newUser);
    const ExistingUser = await userModels.findOne({
      email: req.body.email,
    });

    if (ExistingUser) {
      return res.json({
        status: "error",
        message: `${req.body.email} User(email) already exists`,
      });
    }

    const user = await userModels.create(newUser);
    console.log(user);

    return res.status(200).json({
      user,
      status: "success",
      message: "User register success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error });
  }
};

/**
 1. Check if Email and password given
 2. Load user from database by email
 3. if not user send res Some message
 4. compare password
 5. if password not match send res Some message
 6. check if user is active
 7. if not active send res Some message
 8. generate token
 9. send user and token
 */

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

    if (!email || !password) {
      return res.status(401).json({
        status: "error",
        message: "Email and password are required",
      });
    }

    const user = await userModels.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "User not found",
      });
    }

    const isMatchPassword = await bcrypt.compareSync(password, user.password);
    if (!isMatchPassword) {
      return res.status(401).json({
        status: "error",
        message: "Password not match",
      });
    }
 
 

    const token = generateToken(user);

    console.log("console.log(email, password);", user);

    // IGNORE PASSWORD
    const { password: pwd, ...others } = user.toObject();

    console.log('data', others)

    return res.status(200).send({
      status: "success",
      user: others,
      token,
      id: user._id,
      message: "User Login Successful",
    });
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
};
  
 
const updateUserName = async (req, res) => {
  try {
    const _id = req.params.ID;
    const { displayName } = req.body.formData;

    console.log("_id", _id);

    const update = await userModels.updateOne(
      { _id },
      { $set: { displayName } }
    );

    // console.log("update", update);

    return res.status(201).send(update);
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
};

const updateProfileImage = async (req, res) => {
  try {
    const {email}= req.params;
 
    let avatar = '' 
    if(req.file){
     avatar = req.file.path
   }  

    const update = await userModels.updateOne({email},  { $set: { avatar } });

    return res.status(201).send(update);
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
};


module.exports = {
  createUser,
  getUser,  
  updateUserName,
  updateProfileImage
};
