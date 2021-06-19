const config = require("../config/index");
var serviceUser = require("../service/utilisateur");
function signUp(req, res) {
  serviceUser
    .register(req, res)
    .then((value) => {
      if (value.status)
        res.send({
          status: true,
          message: config.msg[req.body.loc || "FR"].MSG_I0001,
        });
      else res.send({ status: false, message: value.message });
    })
    .catch((err) => {
      let message = "";
      if (
        err.errors.emailUtilisateur !== undefined &&
        err.errors.emailUtilisateur.properties.type === "unique"
      )
        message = config.msg[req.body.loc || "FR"].MSG_E0004;
      else if (
        err.errors.nomCompletUtilisateur !== undefined &&
        err.errors.nomCompletUtilisateur.properties.type === "unique"
      )
        message = config.msg[req.body.loc || "FR"].MSG_E0005;
      else message = config.msg[req.body.loc || "FR"].MSG_E0007;
      res.send({ status: false, message: message });
    });
}
function testDoublonMail(req, res) {
  serviceUser
    .testDoublonMail(req, res)
    .then((value) => {
      if (value)
        res.send({
          status: true,
          message: config.msg[req.body.loc || "FR"].MSG_E0004,
        });
      else res.send({ status: false, message: value.message });
    })
    .catch((err) =>
      res.send({
        status: false,
        message: config.msg[req.body.loc || "FR"].MSG_E0007,
      })
    );
}

function authentification(req, res) {
  serviceUser
    .auth(req, res)
    .then((value) => {
      if (value.auth) res.send({ auth: true, token: value.token });
      else
        res.send({
          auth: false,
          message: config.msg[req.body.loc || "FR"].MSG_E0001,
        });
    })
    .catch((err) =>
      res.send({
        status: false,
        message: config.msg[req.body.loc || "FR"].MSG_E0007,
      })
    );
}
module.exports = { signUp, testDoublonMail, authentification };
