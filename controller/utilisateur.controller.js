var serviceUser = require("../service/utilisateur");
function signUp(req, res) {
  serviceUser
    .register(req, res)
    .then((value) => {
      if (value.status)
        res.send({ status: true, message: "Ajout modérateur réussi !" });
      else res.send({ status: false, message: value.message });
    })
    .catch((err) => {
      res.send({ status: false, message: err.message });
    });
}
function testDoublonMail(req, res) {
  serviceUser.testDoublonMail(req, res).then((value) => {
    if (value)
      res.send({ status: true, message: "Email utilisateur dupliqué ." });
    else res.send({ status: false, message: value.message });
  });
}

function authentification(req, res) {
  serviceUser.auth(req, res).then((value) => {
    if (value.auth) res.send({ auth: true, token: value.token });
    else res.send({ auth: false, message: "Email ou mot de passe invalide !" });
  });
}
module.exports = { signUp, testDoublonMail, authentification };
