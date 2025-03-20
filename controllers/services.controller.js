
const consultationModels = require("../models/consultation.models");
const financialModels = require("../models/financial.models");
const foodModels = require("../models/food.models");
const joinModels = require("../models/join.models");
const officesModels = require("../models/offices.models");
const peopleModels = require("../models/people.models");
const { generateToken } = require("../utils/token");
let bcrypt = require("bcryptjs");

//  response
const createOfficeFastContent = async (req, res) => {
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

const getAllDataOffice = async (req, res) => {
    //   console.log("user", req.user);
    try {
        const join = await officesModels.find({});

        return res.status(201).send(join);
    } catch (error) {
        return res.status(401).json({ status: "error", message: error.massages });
    }
};

const updateOfficeFastContent = async (req, res) => {
    const { content } = req.body;

    
    try {
        const result = await officesModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.eng": content } });
 
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

const updateOfficeFastContentArb = async (req, res) => {
    const { arb } = req.body;
    const { content } = req.body;
    try {
        const result = await officesModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.arb": content } });
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

const updateOfficeR2Content = async (req, res) => {
    const { content } = req.body;

    
    try {
        const result = await officesModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.eng": content } });
 
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

const updateOfficeR2ContentArb = async (req, res) => {
    const { arb } = req.body;
    const { content } = req.body;
    try {
        const result = await officesModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.arb": content } });
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

const createOfficeR2ContentObj = async (req, res) => {
    try { 
    const engValue = req.body.eng; // 'eng' value
    const arbValue = req.body.arb; // 'arb' value

  
        // If contentId is not provided, create new data
        const newContent = { eng: engValue, arb: arbValue };
        const doc = await officesModels.findOneAndUpdate({}, { $push: { r2Content: newContent } }, { new: true });

        if (!doc) {
            return res.status(404).send('Document not found');
        }

        res.json(doc);
  
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
};
const updateOfficeR2ContentObj  = async (req, res) => {
try {
    const precedingEngValue = req.body.eng; // 'eng' value of preceding object
    const precedingArbValue = req.body.arb; // 'bng' value of preceding object
    const updatedData = req.body.updated; // New values for the next object 
    const updatedDocument = await officesModels.findOneAndUpdate(
        {
            'r2Content.eng': precedingEngValue,
            'r2Content.arb': precedingArbValue,
        },
        {
            $set: {
                'r2Content.$.eng': updatedData.eng,
                'r2Content.$.arb': updatedData.arb,
            },
        },
        { new: true }
    );

    if (!updatedDocument) {
        return res.status(404).send('Document with preceding data not found');
    }

    res.json({ message: "Update successful", updatedDocument: updatedDocument });
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
};

// ----------------
const createCorporateFastContent = async (req, res) => {
    try {
        const data = req.body;
        const join = await consultationModels.create(data);
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

const getAllDataCorporate = async (req, res) => {
    //   console.log("user", req.user);
    try {
        const join = await consultationModels.find({});

        return res.status(201).send(join);
    } catch (error) {
        return res.status(401).json({ status: "error", message: error.massages });
    }
};

const updateCorporateFastContent = async (req, res) => {
    const { content } = req.body;
    try {
        const result = await consultationModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.eng": content } });
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

const updateCorporateFastContentArb = async (req, res) => {
    const { arb } = req.body;
    const { content } = req.body;
    try {
        const result = await consultationModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.arb": content } });
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

// Controller to create new data
const createCorporateR2Content = async (req, res) => {
        try { 
        const engValue = req.body.eng; // 'eng' value
        const arbValue = req.body.arb; // 'arb' value

      
            // If contentId is not provided, create new data
            const newContent = { eng: engValue, arb: arbValue };
            const doc = await consultationModels.findOneAndUpdate({}, { $push: { r2Content: newContent } }, { new: true });

            if (!doc) {
                return res.status(404).send('Document not found');
            }

            res.json(doc);
      
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// -------------
const updateCorporateR2Content  = async (req, res) => {
    try {
        const precedingEngValue = req.body.eng; // 'eng' value of preceding object
        const precedingArbValue = req.body.arb; // 'bng' value of preceding object
        const updatedData = req.body.updated; // New values for the next object 
        const updatedDocument = await consultationModels.findOneAndUpdate(
            {
                'r2Content.eng': precedingEngValue,
                'r2Content.arb': precedingArbValue,
            },
            {
                $set: {
                    'r2Content.$.eng': updatedData.eng,
                    'r2Content.$.arb': updatedData.arb,
                },
            },
            { new: true }
        );

        if (!updatedDocument) {
            return res.status(404).send('Document with preceding data not found');
        }

        res.json({ message: "Update successful", updatedDocument: updatedDocument });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
 
// ------

const update3rdCorporateContent = async (req, res) => { 
    const {content}= req.body;  
  
    console.log(content);
      try {
        const result = await consultationModels.updateMany({r3Content:{$exists : true}}, {$set: {"r3Content.eng": content}});
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
  
  const update3rdCorporateContentArb = async (req, res) => { 
  const {content}= req.body;
  try {
    const result = await consultationModels.updateMany({r3Content:{$exists : true}}, {$set: {"r3Content.arb": content}});
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
  
  const update4thCorporateContent = async (req, res) => { 
    const {content}= req.body; 
  
    console.log("content",content);
      try {
        const result = await consultationModels.updateMany({r4Content:{$exists : true}}, {$set: {"r4Content.eng": content}});
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
  
  const update4thCorporateContentArb = async (req, res) => { 
  const {content}= req.body;
  try {
    const result = await consultationModels.updateMany({r4Content:{$exists : true}}, {$set: {"r4Content.arb": content}});
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

  const createCorporateR5Content = async (req, res) => {
    try { 
    const engValue = req.body.eng; // 'eng' value
    const arbValue = req.body.arb; // 'arb' value 
        // If contentId is not provided, create new data
        const newContent = { eng: engValue, arb: arbValue };
        const doc = await consultationModels.findOneAndUpdate({}, { $push: { r5Content: newContent } }, { new: true });

        if (!doc) {
            return res.status(404).send('Document not found');
        }

        res.json(doc);
  
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
}; 

  const updateCorporateR5Content  = async (req, res) => {
    try {
        const precedingEngValue = req.body.eng; // 'eng' value of preceding object
        const precedingArbValue = req.body.arb; // 'bng' value of preceding object
        const updatedData = req.body.updated; // New values for the next object 
        const updatedDocument = await consultationModels.findOneAndUpdate(
            {
                'r5Content.eng': precedingEngValue,
                'r5Content.arb': precedingArbValue,
            },
            {
                $set: {
                    'r5Content.$.eng': updatedData.eng,
                    'r5Content.$.arb': updatedData.arb,
                },
            },
            { new: true }
        );

        if (!updatedDocument) {
            return res.status(404).send('Document with preceding data not found');
        }

        res.json({ message: "Update successful", updatedDocument: updatedDocument });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
//   -------------------
const createFoodContent = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const food = await foodModels.create(data); 
        return res.status(200).json({
            food,
            status: "success",
            message: "Join add success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", message: error });
    }
};
const getAllDataFood = async (req, res) => {
    //   console.log("user", req.user);
    try {
        const join = await foodModels.find({});

        return res.status(201).send(join);
    } catch (error) {
        return res.status(401).json({ status: "error", message: error.massages });
    }
};
const updateFoodFastContent = async (req, res) => {
    const { content } = req.body;
    console.log("content", content);
    try {
        const result = await foodModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.eng": content } });
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
const updateFoodFastContentArb = async (req, res) => {
    const { arb } = req.body;
    const { content } = req.body;
    try {
        const result = await foodModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.arb": content } });
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

const createFoodR2Content = async (req, res) => {
    try { 
    const engValue = req.body.eng; // 'eng' value
    const arbValue = req.body.arb; // 'arb' value

  
        // If contentId is not provided, create new data
        const newContent = { eng: engValue, arb: arbValue };
        const doc = await foodModels.findOneAndUpdate({}, { $push: { r2Content: newContent } }, { new: true });

        if (!doc) {
            return res.status(404).send('Document not found');
        }

        res.json(doc);
  
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
};
const updateFoodR2Content  = async (req, res) => {
try {
    const precedingEngValue = req.body.eng; // 'eng' value of preceding object
    const precedingArbValue = req.body.arb; // 'bng' value of preceding object
    const updatedData = req.body.updated; // New values for the next object 
    const updatedDocument = await foodModels.findOneAndUpdate(
        {
            'r2Content.eng': precedingEngValue,
            'r2Content.arb': precedingArbValue,
        },
        {
            $set: {
                'r2Content.$.eng': updatedData.eng,
                'r2Content.$.arb': updatedData.arb,
            },
        },
        { new: true }
    );

    if (!updatedDocument) {
        return res.status(404).send('Document with preceding data not found');
    }

    res.json({ message: "Update successful", updatedDocument: updatedDocument });
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
};
const createFoodR3Content = async (req, res) => {
    try { 
    const engValue = req.body.eng; // 'eng' value
    const arbValue = req.body.arb; // 'arb' value

  
        // If contentId is not provided, create new data
        const newContent = { eng: engValue, arb: arbValue };
        const doc = await foodModels.findOneAndUpdate({}, { $push: { r2Content: newContent } }, { new: true });

        if (!doc) {
            return res.status(404).send('Document not found');
        }

        res.json(doc);
  
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
};

const updateFoodR3Content  = async (req, res) => {
    try {
        const precedingEngValue = req.body.eng; // 'eng' value of preceding object
        const precedingArbValue = req.body.arb; // 'bng' value of preceding object
        const updatedData = req.body.updated; // New values for the next object 
        const updatedDocument = await foodModels.findOneAndUpdate(
            {
                'r2Content.array.eng': precedingEngValue,
                'r2Content.array.arb': precedingArbValue,
            },
            {
                $set: {
                    'r2Content.array.$.eng': updatedData.eng,
                    'r2Content.array.$.arb': updatedData.arb,
                },
            },
            { new: true }
        );
    
        if (!updatedDocument) {
            return res.status(404).send('Document with preceding data not found');
        }
    
        res.json({ message: "Update successful", updatedDocument: updatedDocument });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    };

//   -------------------
const createFoodPeople= async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const food = await peopleModels.create(data); 
        return res.status(200).json({
            food,
            status: "success",
            message: "Join add success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", message: error });
    }
};

const getAllDataPeople= async (req, res) => {
    //   console.log("user", req.user);
    try {
        const join = await peopleModels.find({});

        return res.status(201).send(join);
    } catch (error) {
        return res.status(401).json({ status: "error", message: error.massages });
    }
};

const updatePeopleFastContent = async (req, res) => {
    const { content } = req.body;
    try {
        const result = await peopleModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.eng": content } });
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

const updatePeopleFastContentArb = async (req, res) => {
    const { arb } = req.body;
    const { content } = req.body;
    try {
        const result = await peopleModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.arb": content } });
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

const createPeopleR2Content = async (req, res) => {
    try { 
    const engValue = req.body.eng; // 'eng' value
    const arbValue = req.body.arb; // 'arb' value

  
        // If contentId is not provided, create new data
        const newContent = { eng: engValue, arb: arbValue };
        const doc = await peopleModels.findOneAndUpdate({}, { $push: { r2Content: newContent } }, { new: true });

        if (!doc) {
            return res.status(404).send('Document not found');
        }

        res.json(doc);
  
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
};
const updatePeopleR2Content  = async (req, res) => {
try {
    const precedingEngValue = req.body.eng; // 'eng' value of preceding object
    const precedingArbValue = req.body.arb; // 'bng' value of preceding object
    const updatedData = req.body.updated; // New values for the next object 
    const updatedDocument = await peopleModels.findOneAndUpdate(
        {
            'r2Content.eng': precedingEngValue,
            'r2Content.arb': precedingArbValue,
        },
        {
            $set: {
                'r2Content.$.eng': updatedData.eng,
                'r2Content.$.arb': updatedData.arb,
            },
        },
        { new: true }
    );

    if (!updatedDocument) {
        return res.status(404).send('Document with preceding data not found');
    }

    res.json({ message: "Update successful", updatedDocument: updatedDocument });
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
};

//   -------------------
 
const getAllDataFinancial = async (req, res) => {
    //   console.log("user", req.user);
    try {
        const join = await financialModels.find({});

        return res.status(201).send(join);
    } catch (error) {
        return res.status(401).json({ status: "error", message: error.massages });
    }
};


const updateFinancialFastContent = async (req, res) => {
    const { content } = req.body;
    try {
        const result = await financialModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.eng": content } });
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

const updateFinancialFastContentArb = async (req, res) => {
    const { arb } = req.body;
    const { content } = req.body;
    try {
        const result = await financialModels.updateMany({ r1Content: { $exists: true } }, { $set: { "r1Content.arb": content } });
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


const createFinancialR2Content = async (req, res) => {
    try { 
    const engValue = req.body.eng; // 'eng' value
    const arbValue = req.body.arb; // 'arb' value

  
        // If contentId is not provided, create new data
        const newContent = { eng: engValue, arb: arbValue };
        const doc = await financialModels.findOneAndUpdate({}, { $push: { r2Content: newContent } }, { new: true });

        if (!doc) {
            return res.status(404).send('Document not found');
        }

        res.json(doc);
  
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
};
const updateFinancialR2Content  = async (req, res) => {
try {
    const precedingEngValue = req.body.eng; // 'eng' value of preceding object
    const precedingArbValue = req.body.arb; // 'bng' value of preceding object
    const updatedData = req.body.updated; // New values for the next object 
    const updatedDocument = await financialModels.findOneAndUpdate(
        {
            'r2Content.eng': precedingEngValue,
            'r2Content.arb': precedingArbValue,
        },
        {
            $set: {
                'r2Content.$.eng': updatedData.eng,
                'r2Content.$.arb': updatedData.arb,
            },
        },
        { new: true }
    );

    if (!updatedDocument) {
        return res.status(404).send('Document with preceding data not found');
    }

    res.json({ message: "Update successful", updatedDocument: updatedDocument });
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
};
module.exports = {
    createOfficeFastContent,updateOfficeFastContent,updateOfficeFastContentArb,getAllDataOffice,updateCorporateFastContent,updateCorporateFastContentArb,update3rdCorporateContent,update3rdCorporateContentArb,update4thCorporateContent,update4thCorporateContentArb,updateFoodFastContent,updateFoodFastContentArb, updatePeopleFastContent, updatePeopleFastContentArb, updateFinancialFastContent, updateFinancialFastContentArb,updateOfficeR2Content, updateOfficeR2ContentArb, getAllDataFood, createFoodContent, createCorporateFastContent, getAllDataCorporate, getAllDataFinancial, createFoodPeople, getAllDataPeople, createCorporateR2Content, updateCorporateR2Content, createCorporateR5Content, updateCorporateR5Content, updatePeopleR2Content,createPeopleR2Content, createFoodR2Content, updateFoodR2Content,createOfficeR2ContentObj, updateOfficeR2ContentObj,updateFinancialR2Content, createFinancialR2Content
}
