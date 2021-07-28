const { aggregate } = require("../model/Matchs");
let Match = require("../model/Matchs");
let Progression = require('../model/progression_type');
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


function getProgressionEnCours(req,res){
  return new Promise((resolve, reject) => {
    Progression.findOne(
      { nomProgressionType: "en cours" },
      (err, progression) => {
        if (err) reject(err);
        else {
          if (role != null) resolve(progression);
          else resolve(false);
        }
      })
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

//nombre de match par progression
function getCompteMatchEncours(req, res){
   return new Promise((resolve, reject) => {
      Progression.findOne(
    { nomProgressionType: "en cours" },
    (err, progression) => {
      if (err) res.send(err)
      else {
        let aggregate = Match.aggregate([
          {
              $match:{ idProgressionType: progression._id} 
            }
          ])
          let options = {
           
          };
          Match.aggregatePaginate(aggregate, options, (err, match) => {
              resolve({"count" : match.docs.length,"nomProgressionType":progression.nomProgressionType});
          });
      }
    })  
   })
}
function getCompteMatchTermine(req, res){
   return new Promise((resolve, reject) => {
  Progression.findOne(
    { nomProgressionType: "terminé" },
    (err, progression) => {
      if (err) res.send(err)
      else {
        let aggregate = Match.aggregate([
          {
              $match:{ idProgressionType: progression._id} 
            }
          ])
          let options = {
           
          };
        
          Match.aggregatePaginate(aggregate, options, (err, match) => {
              resolve({"count" : match.docs.length,"nomProgressionType":progression.nomProgressionType});
          });
      }
    })  
   })
}
function getCompteMatchEnattente(req, res){
   return new Promise((resolve, reject) => {
    Progression.findOne(
    { nomProgressionType: "en attente" },
    (err, progression) => {
      if (err) res.send(err)
      else {
        let aggregate = Match.aggregate([
          {
              $match:{ idProgressionType: progression._id} 
            }
          ])
          let options = {
           
          };
        
          Match.aggregatePaginate(aggregate, options, (err, match) => {
              resolve({"count" : match.docs.length,"nomProgressionType":progression.nomProgressionType});
          });
      }
    })  
   })
}
function getCompteMatch(req, res){
  return new Promise((resolve, reject) => {
   Match.find({}, function(err,value){
     if(err) reject(err)
     else resolve({"count" : value.length})
   })
  })
}

function compteProgression(req, res){
   getCompteMatchEncours(req, res).then((value1) =>{
      getCompteMatchEnattente(req, res).then((value2) =>{
        getCompteMatchTermine(req, res).then((value3)=>{
          getCompteMatch(req,res).then((value4)=>{
            data = [value1.count, value2.count,value3.count];
            dataLab = [value1.nomProgressionType, value2.nomProgressionType,value3.nomProgressionType];
            res.send({"data":data, "label": dataLab,"totalMatch": value4.count})
          })
        })
      })
    })
}
//module.exports = { getMatch,getMatchById,getMatchBycompetition,getCompteMatchEnattente,getCompteMatchEncours,getCompteMatchTermine,getCompteMatch,compteProgression };
module.exports = { getMatch,getMatchById,getMatchBycompetition,TopMatch};


