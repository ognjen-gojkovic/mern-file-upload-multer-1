const express = require("express");
const router = express.Router();
const controllerUploadFile = require("../controllers/Controller.uploadFile");
const upload = require("../utils/fileHelper");

router
  .route("/singleFile")
  .post(upload.single("file"), controllerUploadFile.singleFileUpload);

module.exports = router;
