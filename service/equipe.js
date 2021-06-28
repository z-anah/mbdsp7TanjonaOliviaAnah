const { aggregate } = require("../model/equipes");
let Equipe = require("../model/equipes");

// Récupérer tous les equipe (GET)
function getListEquipe(reqs, res) {
  let aggregate = Equipe.aggregate([
    {
      $lookup: {
        from: "formation",
        localField: "idformation",
        foreignField: "id",
        as: "formation",
      },
    },
  ]);

  let options = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
  };
  // callback
  Equipe.aggregatePaginate(aggregate, options, (err, equipe) => {
    if (err) {
      res.send(err);
    }
    res.send(equipe);
  });
}

module.exports = { getListEquipe };
