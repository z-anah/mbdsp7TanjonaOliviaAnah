let express = require("express");
let app = express();
let bodyParser = require("body-parser");

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
const uri =
  "mongodb+srv://tanjona:Mongo220799@cluster0.ejbhp.mongodb.net/pari?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Mongo connected");
  },
  (err) => {
    console.log("Erreur de connexion: ", err);
  }
);

const uploadController = require("./controller/upload.controller");
const userController = require("./controller/utilisateur.controller");
const roleController = require("./controller/role.controller");
const competitionController = require("./controller/competition.controller");
const match = require("./service/match");
const equipe = require("./service/equipe");

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 5000;

// les routes
const prefix = "/api";

//app.route(prefix + "/assignments").get(assignment.getAssignments);

// require("./route/anah.route")(app);
app.route(prefix + "/upload").post(uploadController.upload);
//app.route(prefix + "/download").get(controller.download);
app.route(prefix + "/user/:id").get(userController.userById);
app.route(prefix + "/authentification").post(userController.authentification);
app.route(prefix + "/inscription").post(userController.signUp);
app.route(prefix + "/testDoublonMail").post(userController.testDoublonMail);
app.route(prefix + "/listRoles").get(roleController.listRoles);
app.route(prefix + "/profil/:name").get(uploadController.getProfil);
app.route(prefix + "/download/:name").get(uploadController.download);
app.route(prefix + "/deleteProfil/:name").get(uploadController.deleteProfil);
app.route(prefix + "/modification").put(userController.updateUtilisateur);
app.route(prefix + "/changePassword").put(userController.updatePassword);
app.route(prefix + "/forgotPassword").put(userController.updatePasswordByEmail);
app
  .route(prefix + "/listeCompetition")
  .get(competitionController.listCompetitions);

// app
//   .route(prefix + "/listeMatch/:idcompetition")
//   .get(matchController.listMatchsCompetition);

app.route(prefix + "/listeEquipe").get(equipe.getListEquipe);

app.route(prefix + "/listeMatch").get(match.getMatch);

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log("Serveur démarré sur http://localhost:" + port);
module.exports = app;
