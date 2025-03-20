const mongoose = require("mongoose");

// model step: 1
const homeModel = new mongoose.Schema(
        {
            banner: {
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
            r7Content:{
                type: Object,   
            },  
            r8Content:{
                type: Object,   
            },
            r9Content:{
                type: Object,   
            },
            r10Content:{
                type: Object, 
            }, 
        } 
    );
 
     
module.exports = mongoose.model('home_con', homeModel)
