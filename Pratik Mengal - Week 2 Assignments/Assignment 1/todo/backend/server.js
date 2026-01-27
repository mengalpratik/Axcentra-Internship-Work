require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 CONNECT DB FIRST, THEN START SERVER
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.use("/api/tasks", taskRoutes);

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
