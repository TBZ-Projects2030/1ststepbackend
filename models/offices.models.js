const mongoose = require("mongoose");


const officesModel = new mongoose.Schema(
        {
            r1Content: {
                type: Object,  
            },
            r2Content: {
                type: Array,   
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
              
        } 
    );
 
     
module.exports = mongoose.model('offices_con', officesModel)