const { aggregate } = require("../model/equipes");
let Equipe = require("../model/equipes");
const mongoose = require("mongoose");
// Récupérer tous les equipe (GET)
function getListEquipe(req, res) {
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

function getEquipeById(req, res) {
  let id = parseInt(req.params.idequipe);
  let aggregate = Equipe.aggregate([
    { $match: { _id: { $in: [mongoose.Types.ObjectId(req.params.idequipe)] } } },
    {
      $lookup: {
        from: "formation",
        localField: "idformation",
        foreignField: "id",
        as: "formation",
      },
    },
  ]);

  let options = {};
  // callback
  Equipe.aggregatePaginate(aggregate, options, (err, equipe) => {
    if (err) {
      res.send(err);
    }
    res.send(equipe);
  });
}
module.exports = { getListEquipe, getEquipeById };
