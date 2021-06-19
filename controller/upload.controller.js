const uploadFile = require("../middleware/upload");

async function upload(req, res) {
  try {
    await uploadFile(req, res);
    if (req.file == undefined)
      res.send({ message: "Please upload a file!", status: false });

    res.status(200).send({
      status: true,
      data: req.file.filename,
    });
  } catch (error) {
    if (error.code == "LIMIT_FILE_SIZE") {
      return res.send({
        message: "Taille maximum : 5MB !",
        status: false,
      });
    }
    res.send({
      message: `${error}`,
      status: false,
    });
  }
}
/*const upload = async (req, res) => {
  console.log("file "+req);
  try {
  //  await uploadFile(req, res);

    //if (req.file == undefined) {
      return res.send({ message: "Please upload a file!" });
    //}
    /*res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname
    });
  } 
  catch (err) {
    if (err.code == "LIMIT_FILE_SIZE") {
        return res.status(500).send({
          message: "File size cannot be larger than 1MB!",
        });
      }
    res.status(500).send({
      message: `Could not upload the file: ${req.file}. ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/assets/img/profil/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = 'mcd.jpg';
  const directoryPath = __basedir + "/assets/img/mcd.jpg";

  res.download(directoryPath, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};
*/
module.exports = {
  upload,
};
