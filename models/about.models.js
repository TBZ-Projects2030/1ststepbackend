const mongoose = require("mongoose");

// model step: 1
const aboutModel = new mongoose.Schema(
        {
            r1Content: {
                type: Object,  
            },
            r2Content: {
                type: Object,   
            },
            r3Content:{
                type: Object,   
            },
            r4Content:{
                type: Object,   
            },
            r5Content: {
                type: Object,   
            },
            r6Content:{
                type: Object,   
                 
            },
            
        } 
    );
 
     
module.exports = mongoose.model('about_con', aboutModel)
