const config = require("../config/index");
var serviceUser = require("../service/utilisateur");
let Utilisateurs = require("../model/Utilisateurs");
function signUp(req, res) {
  serviceUser
    .register(req, res)
    .then((value) => {
      if (value.status)
        res.send({
          status: true,
          message: config.msg[req.body.loc || "FR"].info.MSG_I0001,
        });
      else res.send({ status: false, message: value.message });
    })
    .catch((err) => {
      let message = "";
      if (
        err.errors.emailUtilisateur !== undefined &&
        err.errors.emailUtilisateur.properties.type === "unique"
      )
        message = config.msg[req.body.loc || "FR"].error.MSG_E0004;
      else if (
        err.errors.nomCompletUtilisateur !== undefined &&
        err.errors.nomCompletUtilisateur.properties.type === "unique"
      )
        message = config.msg[req.body.loc || "FR"].error.MSG_E0005;
      else message = config.msg[req.body.loc || "FR"].error.MSG_E0007;
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
          message: config.msg[req.body.loc || "FR"].error.MSG_E0004,
        });
      else
        res.send({
          status: false,
          message: config.msg[req.body.loc || "FR"].error.MSG_E0011,
        });
    })
    .catch((err) =>
      res.send({
        status: false,
        message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
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
          message: config.msg[req.body.loc || "FR"].error.MSG_E0001,
        });
    })
    .catch((err) =>
      res.send({
        status: false,
        message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      })
    );
}
function userById(req, res) {
  serviceUser
    .getUserById(req, res)
    .then((value) => {
      if (value.status) res.send({ status: true, result: value.userResult });
      else {
        res.send({
          status: false,
          message: config.msg[req.body.loc || "FR"].error.MSG_E0008,
        });
      }
    })
    .catch((err) =>
      res.send({
        status: false,
        message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      })
    );
}

function updateUtilisateur(req, res) {
  serviceUser
    .updateByIdUtilisateur(req, res)
    .then((value) => {
      if (value.updated)
        res.send({
          status: true,
          result: value.result,
          message: config.msg[req.body.loc || "FR"].info.MSG_I0002,
        });
      else {
        res.send({
          status: false,
          message: config.msg[req.body.loc || "FR"].error.MSG_E0009,
        });
      }
    })
    .catch((err) =>
      res.send({
        status: false,
        message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      })
    );
}

function updatePassword(req, res) {
  serviceUser
    .ckeckPassswordById(req, res)
    .then((value) => {
      if (value.updated)
        res.send({
          status: true,
          result: value.result,
          message: config.msg[req.body.loc || "FR"].info.MSG_I0003,
        });
      else {
        res.send({
          status: false,
          message: config.msg[req.body.loc || "FR"].error.MSG_E0010,
        });
      }
    })
    .catch((err) =>
      res.send({
        status: false,
        message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      })
    );
}

//mot de passe oublié
function updatePasswordByEmail(req, res) {
  serviceUser
    .updatePasswordByEmail(req, res)
    .then((value) => {
      if (value.updated)
        res.send({
          status: true,
          result: value.result,
          message: config.msg[req.body.loc || "FR"].info.MSG_I0003,
        });
      else {
        res.send({
          status: false,
          message: config.msg[req.body.loc || "FR"].error.MSG_E009,
        });
      }
    })
    .catch((err) =>
      res.send({
        status: false,
        message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      })
    );
}

function listModerateur(req, res) {
  serviceUser
    .getListModerateur(req, res)
    .then((value) => {
      if (value.list)
        res.send({
          list: true,
          result: value.result,
          message: config.msg[req.body.loc || "FR"].info.MSG_I0007,
        });
      else {
        res.send({
          list: false,
          message: config.msg[req.body.loc || "FR"].error.MSG_E0012,
        });
      }
    })
    .catch((err) =>
      res.send({
        list: false,
        message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      })
    );
}

function listModerateur(req, res) {
  serviceUser
    .getListModerateur(req, res)
    .then((value) => {
      if (value.list)
        res.send({
          list: true,
          result: value.result,
          message: config.msg[req.body.loc || "FR"].info.MSG_I0007,
        });
      else {
        res.send({
          list: false,
          message: config.msg[req.body.loc || "FR"].error.MSG_E0012,
        });
      }
    })
    .catch((err) =>
      res.send({
        list: false,
        message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      })
    );
}
function listUser(req, res) {
  serviceUser
    .getListUser(req, res)
    .then((value) => {
      if (value.list)
        res.send({
          list: true,
          result: value.result,
          message: config.msg[req.body.loc || "FR"].info.MSG_I0007,
        });
      else {
        res.send({
          list: false,
          message: config.msg[req.body.loc || "FR"].error.MSG_E0012,
        });
      }
    })
    .catch((err) =>
      res.send({
        list: false,
        message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      })
    );
}

module.exports = {
  signUp,
  testDoublonMail,
  authentification,
  userById,
  updateUtilisateur,
  updatePassword,
  updatePasswordByEmail,
  listModerateur,
  listUser
};
