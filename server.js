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


const competitionController = require("./controller/competition.controller");
const match = require("./service/match");
const equipe = require("./service/equipe");
const joueur = require("./service/joueur");

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


require("./route/anah.route")(app);
require("./route/tanjona.route")(app);

app
  .route(prefix + "/listeCompetition")
  .get(competitionController.listCompetitions);

// app
//   .route(prefix + "/listeMatch/:idcompetition")
//   .get(matchController.listMatchsCompetition);

app.route(prefix + "/listeJoueurByEquipe/:id").get(joueur.getJoeurByEquipe);
app.route(prefix + "/joueurById/:id").get(joueur.getJoeurById);
app.route(prefix + "/listeEquipe").get(equipe.getListEquipe);
app.route(prefix + "/listeMatch").get(match.getMatch);

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log("Serveur démarré sur http://localhost:" + port);
module.exports = app;
