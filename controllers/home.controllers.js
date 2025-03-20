const homeModels = require("../models/home.models");  
const { generateToken } = require("../utils/token");
let bcrypt = require("bcryptjs");

//  response
const createFastContent = async (req, res) => {
  try {
    const {data} = req.body;  
    const user = await homeModels.create(data);
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

const getAllDataHome = async (req, res) => {
//   console.log("user", req.user);
  try {
    const home = await homeModels.find({});

    return res.status(201).send(home);
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
};

const updateFastContent = async (req, res) => { 
        const {content}= req.body; 
          try {
            const result = await homeModels.updateMany({banner:{$exists : true}}, {$set: {"banner.eng": content}});
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

  const updateFastContentArb = async (req, res) => { 
    const {arb}= req.body;
    const {content}= req.body;
      try {
        const result = await homeModels.updateMany({banner:{$exists : true}}, {$set: {"banner.arb": content}});
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

const updateSecondContent = async (req, res) => { 
  const {content}= req.body; 

  console.log("content",content);
    try {
      const result = await homeModels.updateMany({r2Content:{$exists : true}}, {$set: {"r2Content.eng": content}});
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

const updateSecondContentArb = async (req, res) => { 
const {arb}= req.body;
const {content}= req.body;
try {
  const result = await homeModels.updateMany({r2Content:{$exists : true}}, {$set: {"r2Content.arb": content}});
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

const update3rdContent = async (req, res) => { 
  const {content}= req.body;  

  console.log(content);
    try {
      const result = await homeModels.updateMany({r3Content:{$exists : true}}, {$set: {"r3Content.eng": content}});
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

const update3rdContentArb = async (req, res) => { 
const {content}= req.body;
try {
  const result = await homeModels.updateMany({r3Content:{$exists : true}}, {$set: {"r3Content.arb": content}});
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

const update4thContent = async (req, res) => { 
  const {content}= req.body; 

  console.log("content",content);
    try {
      const result = await homeModels.updateMany({r4Content:{$exists : true}}, {$set: {"r4Content.eng": content}});
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

const update4thContentArb = async (req, res) => { 
const {content}= req.body;
try {
  const result = await homeModels.updateMany({r4Content:{$exists : true}}, {$set: {"r4Content.arb": content}});
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

const update5thContent = async (req, res) => { 
  const {content}= req.body;  
    try {
      const result = await homeModels.updateMany({r5Content:{$exists : true}}, {$set: {"r5Content.eng": content}});
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

const update5thContentArb = async (req, res) => { 
const {content}= req.body;
try {
  const result = await homeModels.updateMany({r5Content:{$exists : true}}, {$set: {"r5Content.arb": content}});
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

const update6thContent = async (req, res) => { 
  const {content}= req.body;  
    try {
      const result = await homeModels.updateMany({r6Content:{$exists : true}}, {$set: {"r6Content.eng": content}});
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

const update6thContentArb = async (req, res) => { 
const {content}= req.body;
try {
  const result = await homeModels.updateMany({r6Content:{$exists : true}}, {$set: {"r6Content.arb": content}});
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

const update7thContent = async (req, res) => { 
  const {content}= req.body;  
    try {
      const result = await homeModels.updateMany({r7Content:{$exists : true}}, {$set: {"r7Content.eng": content}});
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

const update7thContentArb = async (req, res) => { 
const {content}= req.body;
try {
  const result = await homeModels.updateMany({r7Content:{$exists : true}}, {$set: {"r7Content.arb": content}});
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

const update8thContent = async (req, res) => { 
  const {content}= req.body;  

  console.log(content);
    try {
      const result = await homeModels.updateMany({r8Content:{$exists : true}}, {$set: {"r8Content.eng": content}});
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

const update8thContentArb = async (req, res) => { 
const {content}= req.body;
try {
  const result = await homeModels.updateMany({r8Content:{$exists : true}}, {$set: {"r8Content.arb": content}});
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

const update9thContent = async (req, res) => { 
  const {content}= req.body;   

  console.log(content);
    try {
      const result = await homeModels.updateMany({r9Content:{$exists : true}}, {$set: {"r9Content.eng": content}});
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

const update9thContentArb = async (req, res) => { 
  const {content}= req.body;
  try {
    const result = await homeModels.updateMany({r8Content:{$exists : true}}, {$set: {"r9Content.arb": content}});
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

const update10thContent = async (req, res) => { 
    const {content}= req.body;   
      try {
        const result = await homeModels.updateMany({r10Content:{$exists : true}}, {$set: {"r10Content.eng": content}});
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

const update10thContentArb = async (req, res) => { 
const {content}= req.body;
try {

  const result = await homeModels.updateMany({r10Content:{$exists : true}}, {$set: {"r10Content.arb": content}});

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
  createFastContent, updateFastContent, updateFastContentArb, getAllDataHome, updateSecondContent, updateSecondContentArb, update3rdContent, update3rdContentArb, update4thContent, update4thContentArb, update5thContent, update5thContentArb, update7thContentArb,update7thContent, update6thContent, update6thContentArb, update8thContent, update8thContentArb, update9thContent, update9thContentArb, update10thContent,update10thContentArb
};
