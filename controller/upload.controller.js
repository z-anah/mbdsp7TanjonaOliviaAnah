const config = require("../config/index");
const uploadFile = require("../middleware/upload");

async function upload(req, res) {
  try {
    await uploadFile(req, res);
    if (req.file == undefined)
      res.send({
        message: config.msg[req.body.loc || "FR"].MSG_E0002,
        status: false,
      });

    res.status(200).send({
      status: true,
      data: req.file.filename,
    });
  } catch (error) {
    if (error.code == "LIMIT_FILE_SIZE") {
      return res.send({
        message: config.msg[req.body.loc || "FR"].MSG_E0003,
        status: false,
      });
    }
    res.send({
      message: `${error}`,
      status: false,
    });
  }
}
module.exports = {
  upload,
};
