const { aggregate } = require("../model/Matchs");
let Match = require("../model/Matchs");
const mongoose = require("mongoose");
//Top 3 match àvenir 
function TopMatch(req,res){
  
  let aggregate = Match.aggregate([
    {$match: {'idProgressionType': {$in:[mongoose.Types.ObjectId("60df6680f56ae1297ca71c2f")]}} },
    {
      $lookup: {
        from: "Equipes",
        localField: "idEquipe",
        foreignField: "_id",
        as: "Equipes",
      },
    },
    {
      $lookup: {
        from: "Equipes",
        localField: "Equ_idEquipe",
        foreignField: "_id",
        as: "Equ_equipes_equipe",
      },
    },
    {
      $lookup: {
        from: "Formations",
        localField: "idFormation",
        foreignField: "_id",
        as: "Formations",
      },
    },
    {
      $lookup: {
        from: "progression_type",
        localField: "idProgressionType",
        foreignField: "_id",
        as: "progression_type",
      },
    },
    { $sort: { dateHeureMatch: 1 } },
   
  ]);

  let options = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
  };
  // callback
  Match.aggregatePaginate(aggregate, options, (err, match) => {
    if (err) {
      res.send(err);
    }
    res.send(match);
  });
}
// Récupérer tous les match (GET)
function getMatch(req, res) {
  let aggregate = Match.aggregate([
    
    {
      $lookup: {
        from: "Equipes",
        localField: "idEquipe",
        foreignField: "_id",
        as: "Equipes",
      },
    },
    {
      $lookup: {
        from: "Equipes",
        localField: "Equ_idEquipe",
        foreignField: "_id",
        as: "Equ_equipes_equipe",
      },
    },
    {
      $lookup: {
        from: "Formations",
        localField: "idFormation",
        foreignField: "_id",
        as: "Formations",
      },
    },
  ]);

  let options = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
  };
  // callback
  Match.aggregatePaginate(aggregate, options, (err, match) => {
    if (err) {
      res.send(err);
    }
    res.send(match);
  });
}

function getMatchById(req, res) {
 console.log(req);
  let id = parseInt(req.params.id);
  let aggregate = Match.aggregate([
    {$match: {'_id': {$in:[mongoose.Types.ObjectId(req.params.id)]}} },
    {
      $lookup: {
        from: "Equipes",
        localField: "idEquipe",
        foreignField: "_id",
        as: "Equipes",
      },
    },
    {
      $lookup: {
        from: "Equipes",
        localField: "Equ_idEquipe",
        foreignField: "_id",
        as: "Equ_equipes_equipe",
      },
    },
    {
      $lookup: {
        from: "Formations",
        localField: "idFormation",
        foreignField: "_id",
        as: "Formations",
      },
    },
  ]);

  let options = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
  };
  // callback
  Match.aggregatePaginate(aggregate, options, (err, match) => {
    if (err) {
      res.send(err);
    }
    res.send(match);
  });
}



// Récupérer un match par son id de competition (GET)
function getMatchBycompetition(req, res) {
  
  let aggregate = Match.aggregate([
    {$match: {'idCompetition': {$in:[mongoose.Types.ObjectId(req.params.idcompetition)]}} },
    {
      $lookup: {
        from: "Equipes",
        localField: "idEquipe",
        foreignField: "_id",
        as: "Equipes",
      },
    },
    {
      $lookup: {
        from: "Equipes",
        localField: "Equ_idEquipe",
        foreignField: "_id",
        as: "Equ_equipes_equipe",
      },
    },
    {
      $lookup: {
        from: "Formations",
        localField: "idFormation",
        foreignField: "_id",
        as: "Formations",
      },
    },
  ]);
  
  let options = {

  };
  // callback
  Match.aggregatePaginate(aggregate, options, (err, match) => {
    if (err) {
      res.send(err);
    }
    res.send(match);
  });
}

module.exports = { getMatch,getMatchById,getMatchBycompetition,TopMatch};

