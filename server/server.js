const express = require("express");
const dotenv = require("dotenv").config();

// connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/students", require('./src/routes/studentRoutes'));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});