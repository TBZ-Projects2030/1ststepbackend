const mongoose = require('mongoose');

// connect to the database
const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.DATABASE_URL);
        const conn = await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true, 
          });
           
        console.log(
            `DB connection successful! at ${conn.connection.host}`
        );
    } catch (err) {
        console.log("some things went")
        console.log(err);
    }
};

module.exports = connectDB;

 