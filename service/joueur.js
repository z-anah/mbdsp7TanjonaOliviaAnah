const { aggregate } = require("../model/joueurs");
let Joeurs = require("../model/joueurs");


// Récupérer un equipe par son id de competition (GET)
function getJoeurByEquipe(req, res) {
  let joeurId = parseInt(req.params.idequipe);
  let aggregate = Joeurs.aggregate([
    { $match: { idequipe: joeurId } },
    {
      $lookup: {
        from: "Equipes",
        localField: "idequipe",
        foreignField: "id",
        as: "Equipes",
      },
    },
    {
      $lookup: {
        from: "Poste",
        localField: "idposte",
        foreignField: "id",
        as: "Poste",
      },
    },
  ]);
  let options = {

};
  // callback
  Joeurs.aggregatePaginate(aggregate, options, (err, joueur) => {
    if (err) {
      res.send(err);
    }
    res.send(joueur);
  });
}
module.exports = { getJoeurByEquipe };
