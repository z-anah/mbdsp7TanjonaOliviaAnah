let express = require("express");
let app = express();
let bodyParser = require("body-parser");

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
const uri =
  "mongodb+srv://tanjona:Mongo220799@cluster0.ejbhp.mongodb.net/pari?retryWrites=true&w=majority";
//mongodb+srv://tanjona:Mongo220799@cluster0.ejbhp.mongodb.net/assignments?retryWrites=true&w=majority

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(uri, options).then(
  () => {
    console.log("at URI = " + uri);
  },
  (err) => {
    console.log("Erreur de connexion: ", err);
  }
);

const controller = require("./controller/upload.controller");
const userController = require("./controller/utilisateur.controller");
const roleController = require("./controller/role.controller");

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

app.route(prefix + "/upload").post(controller.upload);
//app.route(prefix + "/download").get(controller.download);
// route pour matieres
app.route(prefix + "/authentification").post(userController.authentification);
app.route(prefix + "/inscription").post(userController.signUp);
app.route(prefix + "/testDoublonMail").post(userController.testDoublonMail);
app.route(prefix + "/listRoles").get(roleController.listRoles);

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log("Serveur démarré sur http://localhost:" + port);
module.exports = app;

//global.__basedir = __dirname;
// const cors = require("cors");
// const express = require("express");
// const app = express();

// global.__basedir = __dirname;

// var corsOptions = {
//   origin: "http://localhost:8010/api"
// };

// // app.use(function (req, res, next) {
// //   res.header("Access-Control-Allow-Origin", "*");
// //   res.header(
// //     "Access-Control-Allow-Headers",
// //     "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
// //   );
// //   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
// //   next();
// // });

// //app.use(cors(corsOptions));

// const initRoutes = require("./routes/route");

// app.use(express.urlencoded({ extended: true }));
// initRoutes(app);

// let port = 8010;
// app.listen(port, () => {
//   console.log(`Running at localhost:${port}`);
// });
