const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const dashboardRoute = require("./routes/dashboardRoute");

const app = express();

/* ---------- MIDDLEWARES FIRST ---------- */
app.use(cors());
app.use(express.json());

/* ---------- ROUTES ---------- */
app.use("/api/auth", authRoutes);
app.use("/api", dashboardRoute);

/* ---------- DB + SERVER ---------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () =>
      console.log("Server running on port 5000")
    );
  })
  .catch(err => console.log(err));
