const mongoose = require("mongoose");

// model step: 1
const joinFormModel = new mongoose.Schema(
        {
            name: {
                type: String,  
            },
            email: {
                type: String,  
            },
            company:{
                type: String,  
            },
            expertise:{
                type: String,  
            },
            telephone:{
                type: String,  
            },
            cover_letter:{
                type: String,  
            }
              
        } 
    );
 
     
module.exports = mongoose.model('join_form', joinFormModel)
