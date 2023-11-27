const express = require("express");
const multer = require("multer");
const { postImage } = require("../controllers/file.controller");
const fileRouter = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploadsImage/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});
const upload = multer({ storage: storage });

// fileRouter.post("/", upload.single("image"), (req, res) => {
//   res.status(200).send("file is uploaded");
// });

fileRouter.post("/", upload.single("image"), postImage);
module.exports = fileRouter;
