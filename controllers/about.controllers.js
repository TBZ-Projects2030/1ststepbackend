 
const aboutModels = require("../models/about.models");
const { generateToken } = require("../utils/token");
let bcrypt = require("bcryptjs");

//  response
const createAboutFastContent = async (req, res) => {
  try {
    const data= req.body;  

    console.log("fata",data);
    const user = await aboutModels.create(data);
 

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


const getAllDataAboutContact = async (req, res) => {
//   console.log("user", req.user);
  try {
    const home = await aboutModels.find({});

    return res.status(201).send(home);
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
};

const updateAboutFastContent = async (req, res) => { 
        const {content}= req.body; 

        console.log(content);
          try {
            const result = await aboutModels.updateMany({r1Content:{$exists : true}}, {$set: {"r1Content.eng": content}});
            res.json({
              status: "success",
              message: "Update successfully",
              result,
            });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server Error" });
          }
  };

  const updateAboutFastContentArb = async (req, res) => { 
    const {arb}= req.body;
    const {content}= req.body;
      try {
        const result = await aboutModels.updateMany({r1Content:{$exists : true}}, {$set: {"r1Content.arb": content}});
        res.json({
          status: "success",
          message: "Update successfully",
          result,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      }
};

const updateAboutSecondContent = async (req, res) => { 
  const {content}= req.body; 

  console.log("content",content);
    try {
      const result = await aboutModels.updateMany({r2Content:{$exists : true}}, {$set: {"r2Content.eng": content}});
      res.json({
        status: "success",
        message: "Update successfully",
        result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
};

const updateAboutSecondContentArb = async (req, res) => { 
const {arb}= req.body;
const {content}= req.body;
try {
  const result = await aboutModels.updateMany({r2Content:{$exists : true}}, {$set: {"r2Content.arb": content}});
  res.json({
    status: "success",
    message: "Update successfully",
    result,
  });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "Server Error" });
}
};


const updateAbout3rdContent = async (req, res) => { 
  const {content}= req.body;  

  console.log(content);
    try {
      const result = await aboutModels.updateMany({r3Content:{$exists : true}}, {$set: {"r3Content.eng": content}});
      res.json({
        status: "success",
        message: "Update successfully",
        result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
};

const updateAbout3rdContentArb = async (req, res) => { 
const {content}= req.body;
try {
  const result = await aboutModels.updateMany({r3Content:{$exists : true}}, {$set: {"r3Content.arb": content}});
  res.json({
    status: "success",
    message: "Update successfully",
    result,                                                    
  });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "Server Error" });
}
};
 

const updateAbout4thContent = async (req, res) => { 
  const {content}= req.body; 

  console.log("content",content);
    try {
      const result = await aboutModels.updateMany({r4Content:{$exists : true}}, {$set: {"r4Content.eng": content}});
      res.json({
        status: "success",
        message: "Update successfully",
        result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
};

const updateAbout4thContentArb = async (req, res) => { 
const {content}= req.body;
try {
  const result = await aboutModels.updateMany({r4Content:{$exists : true}}, {$set: {"r4Content.arb": content}});
  res.json({
    status: "success",
    message: "Update successfully",
    result,
  });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "Server Error" });
}
};

const updateAbout5thContent = async (req, res) => { 
  const {content}= req.body;  
    try {
      const result = await aboutModels.updateMany({r5Content:{$exists : true}}, {$set: {"r5Content.eng": content}});
      res.json({
        status: "success",
        message: "Update successfully",
        result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
};

const updateAbout5thContentArb = async (req, res) => { 
const {content}= req.body;
try {
  const result = await aboutModels.updateMany({r5Content:{$exists : true}}, {$set: {"r5Content.arb": content}});
  res.json({
    status: "success",
    message: "Update successfully",
    result,
  });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "Server Error" });
}
};

 
 
 

module.exports = {
  createAboutFastContent, updateAboutFastContent, updateAboutFastContentArb, getAllDataAboutContact, updateAboutSecondContent, updateAboutSecondContentArb, updateAbout3rdContent, updateAbout3rdContentArb, updateAbout4thContent, updateAbout4thContentArb, updateAbout5thContent, updateAbout5thContentArb, 
};
