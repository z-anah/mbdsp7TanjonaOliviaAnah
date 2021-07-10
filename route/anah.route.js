const controller = require("../controller/anah.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/send-mail", controller.sendMail);
  app.post("/api/competition/create", controller.createCompetition);
  app.post("/api/formations/create", controller.createFormations);
  app.get("/api/formations", controller.formations);
  app.post("/api/equipe/create", controller.createEquipe);
  app.get("/api/equipes", controller.equipes);
  app.post("/api/joueur/create", controller.createJoueur);
  app.post("/api/postes/create", controller.createPostes);
  app.post("/api/match/create", controller.createMatch);
  app.post("/api/joueur/create/csv", controller.createJoueurCsv);
  app.post("/api/matchs", controller.matchs);
  app.post("/api/match", controller.match);
  app.post("/api/match/progression", controller.playMatch);
  app.post("/api/match/but", controller.butMatch);
  app.post("/api/teste", controller.teste);
};
