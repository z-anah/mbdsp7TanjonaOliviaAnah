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
};
