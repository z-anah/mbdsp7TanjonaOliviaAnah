const service = require("../service/anah");
var nodemailer = require("nodemailer");
const config = require("../config/index");
const emailPassRecoverHtml = require("./email-password-recover");
const { uploadFileCsvMiddleware } = require("../middleware/upload");
const csv = require("csv-parser");
const fs = require("fs");

const sendMail = async (req, res) => {
  try {
    // https://myaccount.google.com/lesssecureapps
    var mail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: req.body.sender.user,
        pass: req.body.sender.pass,
      },
    });

    var mailOptions = {
      from: req.body.sender.user,
      to: req.body.recipient.user,
      subject: "Pari: Récupération de mot de passe",
      html: emailPassRecoverHtml,
    };

    mail.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send({
          status: false,
          message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
          desc: error.message,
        });
        throw error;
      } else {
        res.send({
          status: true,
          message: config.msg[req.body.loc || "FR"].info.MSG_I0004,
          data: null,
        });
      }
    });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

const createCompetition = async (req, res) => {
  try {
    let nomCompetition = req.body.nomCompetition;
    let dateDebut = req.body.dateDebut;
    let dateFin = req.body.dateFin;
    const data = await service.createCompetition(
      nomCompetition,
      dateDebut,
      dateFin
    );
    res.send({
      status: true,
      message: config.msg[req.body.loc || "FR"].info.MSG_I0005,
      data: data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

const createFormations = async (req, res) => {
  try {
    let formations = req.body.formations;
    const data = await service.createFormations(formations);
    res.send({
      status: true,
      message: config.msg[req.body.loc || "FR"].info.MSG_I0006,
      data: data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

const formations = async (req, res) => {
  try {
    const data = await service.formations();
    res.send({
      status: true,
      message: config.msg[req.body.loc || "FR"].info.MSG_I0006,
      data: data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

const createEquipe = async (req, res) => {
  try {
    const {
      idformation,
      nomequipe,
      logoequipe,
      nomcoachequipe,
      Descriptionequipe,
    } = req.body;
    const data = await service.createEquipe(
      idformation,
      nomequipe,
      logoequipe,
      nomcoachequipe,
      Descriptionequipe
    );
    res.send({
      status: true,
      message: config.msg[req.body.loc || "FR"].info.MSG_I0006,
      data: data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

const equipes = async (req, res) => {
  try {
    const data = await service.getEquipes();
    res.send({
      status: true,
      message: config.msg[req.body.loc || "FR"].info.MSG_I0006,
      data: data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

const createJoueur = async (req, res) => {
  try {
    const {
      idposte,
      idequipe,
      nomjoueur,
      profiljoueur,
      agejoueur,
      taillejoueur,
      poidsjoueur,
    } = req.body;
    const data = await service.createJoueur(
      idposte,
      idequipe,
      nomjoueur,
      profiljoueur,
      agejoueur,
      taillejoueur,
      poidsjoueur
    );
    res.send({
      status: true,
      message: config.msg[req.body.loc || "FR"].info.MSG_I0006,
      data: data,
    });
  } catch (error) {
    const io = {
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    };
    console.log(io);
    res.send(io);
  }
};

const createPostes = async (req, res) => {
  try {
    let { postes } = req.body;
    const data = await service.createPostes(postes);
    res.send({
      status: true,
      message: config.msg[req.body.loc || "FR"].info.MSG_I0006,
      data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

const teste = async (req, res) => {
  try {
    const data = await service.teste(req.body);
    res.send({
      status: true,
      message: config.msg[req.body.loc || "FR"].info.MSG_I0006,
      data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

const createMatch = async (req, res) => {
  try {
    const data = await service.createMatch(req.body);
    res.send({
      status: true,
      message: config.msg[req.body.loc || "FR"].info.MSG_I0006,
      data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

const createJoueurCsv = async (req, res) => {
  try {
    const data = {};
    await uploadFileCsvMiddleware(req, res);
    data.file = req.file;
    let t = [];
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => t.push(data))
      .on("end", async () => {
        data.joueurs = await service.createJoueurCsv(t);
        res.send({
          status: true,
          message: config.msg[req.body.loc || "FR"].info.MSG_I0006,
          data,
        });
      });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

const matchs = async (req, res) => {
  try {
    const { idProgressionType } = req.body;
    const data = await service.matchs(idProgressionType);
    res.send({
      status: true,
      message: config.msg[req.body.loc || "FR"].info.MSG_I0006,
      data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

module.exports = {
  sendMail,
  createCompetition,
  createFormations,
  formations,
  createEquipe,
  equipes,
  createJoueur,
  createPostes,
  teste,
  createMatch,
  createJoueurCsv,
  matchs,
};
