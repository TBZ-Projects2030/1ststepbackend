const mongoose = require("mongoose");

// connect to the database
const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.DATABASE_URL);
    const conn = await mongoose.connect("mongodb+srv://1stStepsadmin:gT9SF8LXAHvEfwvS@cluster0.dns3kn4.mongodb.net/1stSteps?retryWrites=true&w=majority", {
      useNewUrlParser: true,
    });

    console.log(`DB connection successful! at ${conn.connection.host}`);
  } catch (err) {
    console.log("some things went");
    console.log(err);
  }
};

module.exports = connectDB;
