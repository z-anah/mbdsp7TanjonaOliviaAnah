var jwt = require("jsonwebtoken");
var config = require("../config");
var bcrypt = require("bcryptjs");
let Utilisateurs = require("../model/Utilisateurs");

function getSequenceId(req, res) {
  return new Promise((resolve, reject) => {
    Utilisateurs.findOne()
      .sort("-idUtilisateur")
      .exec(function (err, user) {
        // item.itemId is the max value
        if (err) reject(err);
        else {
          if (user != null) resolve(user.idUtilisateur + 1);
          else resolve(1);
        }
      });
  });
}
function testDoublonMail(req, res) {
  try {
    return new Promise((resolve, reject) => {
      Utilisateurs.findOne(
        { emailUtilisateur: req.body.emailUtilisateur },
        (err, userTest) => {
          if (err) reject(err);
          else {
            if (userTest != null) resolve(true);
            else resolve(false);
          }
        }
      );
    });
  } catch (err) {
    throw err;
  }
}

function register(req, res) {
  try {
    return new Promise((resolve, reject) => {
      var user = new Utilisateurs();
      getSequenceId(req, res).then((value) => {
        user.idUtilisateur = value;
        user.nomCompletUtilisateur = req.body.nomCompletUtilisateur;
        user.emailUtilisateur = req.body.emailUtilisateur;
        user.dateNaissanceUtilisateur = req.body.dateNaissanceUtilisateur;
        user.profilUtilisateur = req.body.profilUtilisateur;
        user.soldeUtilisateur = 0;
        user.idRole = req.body.idRole;
        var hashedPassword = bcrypt.hashSync(
          req.body.motdepasseUtilisateur,
          10
        );
        user.motdepasseUtilisateur = hashedPassword;
        user.save((err) => {
          if (err) reject(err);
          else resolve({ status: true });
        });
      });
    });
  } catch (err) {
    throw err;
  }
}

// Récupérer un utilisateur avec email et password en post
function auth(req, res) {
  let email = req.body.emailUtilisateur;
  let userPasssword = req.body.motdepasseUtilisateur;
  try {
    return new Promise((resolve, reject) => {
      var user = new Utilisateurs();
      Utilisateurs.findOne({ emailUtilisateur: email }, (err, user) => {
        if (err) res.send({ auth: false, token: null });
        else {
          if (user != null) {
            var isValidPassword = bcrypt.compareSync(
              userPasssword,
              user.motdepasseUtilisateur
            );
            if (user && isValidPassword) {
              var token = jwt.sign(
                {
                  id: user.idUtilisateur,
                  nom: user.nomCompletUtilisateur,
                  roles: user.idRole,
                },
                config.secret,
                {
                  expiresIn: 120, // expires in 120 second
                }
              );
              resolve({ auth: true, token: token });
            } else resolve({ auth: false, token: null });
          } else resolve({ auth: false, token: null });
        }
      });
    });
  } catch (err) {
    throw err;
  }
}

module.exports = { register, testDoublonMail, auth };
