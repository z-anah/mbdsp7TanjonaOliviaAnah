/*let express = require("express");
let app = express();
let bodyParser = require("body-parser");

/*let assignment = require("./routes/assignments");
let users = require("./routes/users");
let role = require("./routes/roles");
let matieres = require("./routes/matieres");

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
const uri =
  "mongodb+srv://tanjona:Mongo220799@cluster0.ejbhp.mongodb.net/assignments?retryWrites=true&w=majority";
//mongodb+srv://tanjona:Mongo220799@cluster0.ejbhp.mongodb.net/assignments?retryWrites=true&w=majority

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Connecté à la base MongoDB pari dans le cloud !");
    console.log("at URI = " + uri);
    console.log(
      "vérifiez with http://localhost:8010/api/pari que cela fonctionne"
    );
  },
  (err) => {
    console.log("Erreur de connexion: ", err);
  }
);
const controller = require("./controller/file.controller");
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

let port = process.env.PORT || 8010;

// les routes
const prefix = "/api";

//app.route(prefix + "/assignments").get(assignment.getAssignments);

app.route(prefix + "/upload").post(controller.upload);
// route pour matieres
//app.route(prefix + "/matieres").get(matieres.getMatieres);
// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log("Serveur démarré sur http://localhost:" + port);

module.exports = app;*/
const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8010"
};

app.use(cors(corsOptions));

const initRoutes = require("./routes/route");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8010;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
