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

module.exports = { sendMail };
