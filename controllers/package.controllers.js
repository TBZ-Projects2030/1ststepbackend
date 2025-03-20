 
const packageModels = require("../models/package.models");

const createPackages = async (req, res) => {
    try {
        const {data} = req.body;  
       
        const package = await packageModels.create(data); 

        return res.status(200).json({
            package,
            status: "success",
            message: "Join add success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", message: error });
    }
};

const findPackages = async (req, res) => {
    try { 
        const services = req.params.service;  
        const names = req.params.name;   
        
        console.log("names",names,services)

        const package = await packageModels.find({name: names, service: services}); 

        return res.status(200).json({
            package,
            status: "success",
            message: "Join add success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", message: error });
    }
};

const getAllPackageData = async (req, res) => {
    //   console.log("user", req.user);
    try {
        const join = await packageModels.find({});

        return res.status(201).send(join);
    } catch (error) {
        return res.status(401).json({ status: "error", message: error.massages });
    }
}; 

// Controller to add new data to data_ray
const addDataPackageOffer= async (req, res) => {
    try {
        const newEngValue = req.body.eng;
        const newArbValue = req.body.arb; 
        const documentId = req.params.id;  

        console.log("newEngValue", newEngValue, newArbValue, documentId)
        const updatedDocument = await packageModels.findOneAndUpdate(
            { _id: documentId },
            {
                $push: {
                    'offer': { eng: newEngValue, arb: newArbValue }
                }
            },
            { new: true }
        );

        if (!updatedDocument) {
            return res.status(404).send('Document not found');
        }

        res.json({ message: "Data added successfully", updatedDocument: updatedDocument });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

 
 
const updateDataPackageOffer = async (req, res) => {
    try {
        const precedingEng = req.body.eng;
        const precedingArb = req.body.arb;
        const updatedData = req.body.updated;

        const documentId = req.params.id; // Identifier of the document

        console.log("precedingEng",precedingEng, precedingArb, documentId, updatedData)

        // Find the document and update the data_ray array using $ positional operator
        const updatedDocument = await packageModels.findOneAndUpdate(
            {
                _id: documentId,
                'offer': { eng: precedingEng, arb: precedingArb }
            },
            {
                $set: {
                    'offer.$.eng': updatedData.eng,
                    'offer.$.arb': updatedData.arb
                }
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


const deleteDataPackageOffer = async (req, res) => {
    try {
        const engValueToDelete = req.body.eng;
        const arbValueToDelete = req.body.arb;
        const data = req.body 

        const documentId = req.params.id;  

        console.log(data)

        // Find the document and pull the specific data from the data_ray array
        const updatedDocument = await packageModels.findOneAndUpdate(
            { _id: documentId,  'offer': { eng: engValueToDelete, arb: arbValueToDelete }},
            {
                $pull: {
                    'offer': { eng: engValueToDelete, arb: arbValueToDelete }
                }
            },
            { new: true }
        );

        if (!updatedDocument) {
            return res.status(404).send('Document not found');
        }

        res.json({ message: "Data deleted successfully", updatedDocument: updatedDocument });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
 
const updateDataPackage = async (req, res) => {
    try { 

        const updatedData = req.body.updated;

        const documentId = req.params.id; // Identifier of the document

        console.log("precedingEng", documentId, updatedData)

        // Find the document and update the data_ray array using $ positional operator
        const updatedDocument = await packageModels.findOneAndUpdate(
            {
                _id: documentId, 
            },
            {
                $set: {
                    'packageEng': updatedData.eng,
                    'packageArb': updatedData.arb
                }
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
    createPackages, getAllPackageData, findPackages, updateDataPackageOffer,deleteDataPackageOffer, addDataPackageOffer, updateDataPackage
}