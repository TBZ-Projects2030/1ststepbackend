const mongoose = require("mongoose");


const packageModel = new mongoose.Schema(
        {
            name: {
                type: String,  
            },
            service: {
                type: String,  
            },
            packageEng: {
                type: String, 
            },
            packageArb: {
                type: String, 
            },
            offer:{
                type: Array,   
            },  
        } 
    );
 
     
module.exports = mongoose.model('packages', packageModel)