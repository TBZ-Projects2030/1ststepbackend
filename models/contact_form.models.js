const mongoose = require("mongoose");

// model step: 1
const contactFormModel = new mongoose.Schema(
        {
            name: {
                type: String,  
            },
            email: {
                type: String,  
            },
            telephone:{
                type: String,  
            },
            inquiry:{
                type: String,  
            }
              
        } 
    );
 
     
module.exports = mongoose.model('contact_form', contactFormModel)
