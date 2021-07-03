const config = require("../config/index");
const fs = require("fs");
const { uploadFileMiddleware } = require("../middleware/upload");
async function upload(req, res) {
  try {
    await uploadFileMiddleware(req, res);
    if (req.file == undefined)
      res.send({
        message: config.msg[req.body.loc || "FR"].error.MSG_E0002,
        status: false,
      });

    res.status(200).send({
      status: true,
      data: req.file.filename,
    });
  } catch (error) {
    if (error.code == "LIMIT_FILE_SIZE") {
      return res.send({
        message: config.msg[req.body.loc || "FR"].error.MSG_E0003,
        status: false,
      });
    }
    res.send({
      message: `${error}`,
      status: false,
    });
  }
}
function getProfil(req, res) {
  const directoryPath = "assets/img/profil";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      if (file == req.params.name) {
        fileInfos.push({
          name: file,
          url: "http://localhost:5000/" + directoryPath + file,
        });
      }
    });
    res.status(200).send(fileInfos);
  });
}

function download(req, res) {
  const fileName = req.params.name;
  const directoryPath = "assets/img/profil/";
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.send({
        message: "Could not download the file. " + err,
      });
    }
  });
}

function deleteProfil(req, res) {
  const fileName = req.params.name;
  const directoryPath = "assets/img/profil/";
  fs.unlink(directoryPath + fileName, (err) => {
    if (err) {
      res.send({
        message: "Could not download the file. " + err,
      });
    } else
      res.send({
        fileDeleted: true,
        message: config.msg[req.body.loc || "FR"].info.MSG_I0002,
      });
  });
}

module.exports = {
  upload,
  getProfil,
  download,
  deleteProfil,
};
