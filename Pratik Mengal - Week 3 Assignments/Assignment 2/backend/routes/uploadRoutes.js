const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

// File filter (only images)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb("Only images allowed!", false);
  }
};

const upload = multer({ storage, fileFilter });

// POST route
router.post("/", upload.single("image"), (req, res) => {
  res.json({
    message: "Image uploaded successfully",
    imageUrl: `http://localhost:5000/uploads/${req.file.filename}`,
  });
});

module.exports = router;
