const controllerUploadFile = {
  singleFileUpload: async (req, res, next) => {
    try {
      const file = req.file;

      res.status(201).json({ success: true, msg: "File Upload Success." });
    } catch (error) {
      res.status(500).json({ success: false, msg: err });
    }
  },
  multipleFileUpload: async () => {},
};

module.exports = controllerUploadFile;
