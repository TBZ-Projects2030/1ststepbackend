const contactModels = require("../models/contact.models");
const { generateToken } = require("../utils/token");
let bcrypt = require("bcryptjs");

//  response
const createContactFastContent = async (req, res) => {
  try {
    const data = req.body;
    const contact = await contactModels.create(data);


    return res.status(200).json({
      contact,
      status: "success",
      message: "Contact Add success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error });
  }
};

const getAllDataContact = async (req, res) => {
  //   console.log("user", req.user);
  try {
    const contact = await contactModels.find({});

    return res.status(201).send(contact);
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
};

const updateContactFastContent = async (req, res) => {
  const { content } = req.body;
  console.log("hg", content);
  try {
    const result = await contactModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.eng": content } });
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

const updateContactFastContentArb = async (req, res) => {
  const { arb } = req.body;
  const { content } = req.body;
  try {
    const result = await contactModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.arb": content } });
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

const updateContactSecondContent = async (req, res) => {
  const { content } = req.body;

  console.log("content", content);
  try {
    const result = await contactModels.updateMany({ r2Content: { $exists: true } }, { $set: { "r2Content.eng": content } });
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

const updateContactSecondContentArb = async (req, res) => {
  const { arb } = req.body;
  const { content } = req.body;
  try {
    const result = await contactModels.updateMany({ r2Content: { $exists: true } }, { $set: { "r2Content.arb": content } });
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
  createContactFastContent, updateContactFastContent, updateContactFastContentArb, getAllDataContact, updateContactSecondContent, updateContactSecondContentArb
};
