/* Init Server  */
const express = require("express");
const cors = require("cors");
const connectDB = require("./connection/connectDB");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

/* Set Middle wares  */
app.use(cors());
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// database connect
connectDB();

/* Use Routes  */
app.use("/api/v1/user", require("./router/user.router"));
app.use("/api/v1", require("./router/pages.router"));
app.use("/api/v1", require("./router/services.router"));
app.use("/api/v1/form", require("./router/form.router"));
app.use("/api/v1/service", require("./router/package.router"));

// app.use('/uploads', express.static('./uploads'));

/* testing api  */
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port: https://api.1ststeps.com.sa:${port}`);
  // console.log(`Server is running on port: https://localhost:${port}`);
});

module.exports = app;
