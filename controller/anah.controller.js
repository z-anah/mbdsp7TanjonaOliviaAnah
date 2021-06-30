const service = require("../service/anah");
var nodemailer = require("nodemailer");
const config = require("../config/index");
const emailPassRecoverHtml = require("./email-password-recover");

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
    console.log(formations);
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

module.exports = { sendMail, createCompetition, createFormations, formations };
