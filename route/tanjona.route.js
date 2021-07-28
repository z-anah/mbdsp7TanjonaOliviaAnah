const uploadController = require("../controller/upload.controller");
const userController = require("../controller/utilisateur.controller");
const roleController = require("../controller/role.controller");
const rechargeController = require("../controller/recharge.controller");
module.exports = (app) => {
    app.use((req, res, next) => {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.post("/api/upload",uploadController.upload);
    app.get("/api/user/:id",userController.userById);
    app.post("/api/authentification",userController.authentification);
    app.post("/api/inscription",userController.signUp);
    app.post("/api/testDoublonMail",userController.testDoublonMail);
    app.get("/api/listRoles",roleController.listRoles);
    app.get("/api/adminRole",roleController.adminRole);
    app.get("/api/profil/:name",uploadController.getProfil);
    app.get("/api/download/:name",uploadController.download);
    app.get("/api/deleteProfil/:name",uploadController.deleteProfil);
    app.put("/api/modification",userController.updateUtilisateur);
    app.put("/api/changePassword",userController.updatePassword);
    app.put("/api/forgotPassword",userController.updatePasswordByEmail);
    app.get("/api/listModerateurs",userController.listModerateur);
    app.get("/api/listClients",userController.listClient);
    app.delete("/api/suppressionModerateur/:id",userController.deleteUser);
    app.get("/api/compteClient",userController.compteClient);
    app.get("/api/recharge",rechargeController.getRecharge);
};