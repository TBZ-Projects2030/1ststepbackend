 
const joinModels = require("../models/join.models"); 
const { generateToken } = require("../utils/token");
let bcrypt = require("bcryptjs");

//  response
const createJoinFastContent = async (req, res) => {
  try {
    const data = req.body;  
    const join = await joinModels.create(data);
    console.log(join);

    return res.status(200).json({
      join,
      status: "success",
      message: "Join add success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error });
  }
};

const getAllDataJoin = async (req, res) => {
//   console.log("user", req.user);
  try {
    const join = await joinModels.find({});

    return res.status(201).send(join);
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
};

const updateJoinFastContent = async (req, res) => { 
        const {content}= req.body; 
          try {
            const result = await joinModels.updateMany({r1Content:{$exists : true}}, {$set: {"r1Content.eng": content}});
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

  const updateJoinFastContentArb = async (req, res) => { 
    const {arb}= req.body;
    const {content}= req.body;
      try {
        const result = await joinModels.updateMany({r1Content:{$exists : true}}, {$set: {"r1Content.arb": content}});
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

const updateJoinSecondContent = async (req, res) => { 
  const {content}= req.body; 

  console.log("content",content);
    try {
      const result = await joinModels.updateMany({r2Content:{$exists : true}}, {$set: {"r2Content.eng": content}});
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

const updateJoinSecondContentArb = async (req, res) => { 
const {arb}= req.body;
const {content}= req.body;
try {
  const result = await joinModels.updateMany({r2Content:{$exists : true}}, {$set: {"r2Content.arb": content}});
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
    createJoinFastContent, updateJoinFastContent, updateJoinFastContentArb, getAllDataJoin, updateJoinSecondContent, updateJoinSecondContentArb 
};
