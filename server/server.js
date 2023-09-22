const express = require("express");
const connectDb = require("./src/config/dbConnect");
const errorHandler = require("./src/middleware/errorHandler");
const dotenv = require("dotenv").config();
const allRoutes = require('./src/routes/routes')
const authRoutes = require("./src/routes/userRoutes")

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/", allRoutes);
app.use("/api/users", authRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});