const util = require("util");
const cors = require("cors");
const multer = require("multer");
const config = require("../config/index");
const maxSize = 5 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/img/profil");
  },
  filename: (req, file, cb) => {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "_" + Date.now() + "." + extension);
  },
});
let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error(config.msg[req.body.loc || "FR"].error.MSG_E0006));
    }
  },
}).single("profil");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
