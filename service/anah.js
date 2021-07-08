const { ObjectId } = require("bson");
const Mongoose = require("mongoose");
let Competition = require("../model/Competition");
let equipes = require("../model/equipes");
let Formation = require("../model/Formation");
const joueurs = require("../model/joueurs");
const Matchs = require("../model/Matchs");
const Postes = require("../model/Postes");
const progression_type = require("../model/progression_type");
const type_pari = require("../model/type_pari");
const createCompetition = async (nomCompetition, dateDebut, dateFin) => {
  let c = new Competition({
    nomcompetition: nomCompetition,
    datedebutcompetition: dateDebut,
    datefincompetition: dateFin,
  });
  await c.save();
  return c;
};
const createEquipe = async (
  idformation,
  nomequipe,
  logoequipe,
  nomcoachequipe,
  Descriptionequipe
) => {
  let m = new equipes({
    idformation: ObjectId(idformation),
    nomequipe,
    logoequipe,
    nomcoachequipe,
    Descriptionequipe,
  });
  await m.save();
  return m;
};
const createFormation = async (nomformation) => {
  let m = new Formation({
    nomformation: nomformation,
  });
  await m.save();
  return m;
};
const createFormations = async (formations) => {
  let m = [];
  formations.map(async (f) => {
    let nf = await createFormation(f);
    m.push(nf);
  });
  return m;
};
const formations = async () => {
  let f = await Formation.find({});
  return f;
};
const getEquipes = async () => {
  let d = await equipes.find({});
  return d;
};
const createJoueur = async (
  idposte,
  idequipe,
  nomjoueur,
  profiljoueur,
  agejoueur,
  taillejoueur,
  poidsjoueur
) => {
  let d = new joueurs({
    idposte: idposte,
    idequipe: ObjectId(idequipe),
    nomjoueur,
    profiljoueur,
    agejoueur,
    taillejoueur,
    poidsjoueur,
  });
  await d.save();
  return d;
};
const createPoste = async (poste) => {
  let { idPoste, nomPoste, abreviation } = poste;
  let d = new Postes({
    idPoste,
    nomPoste,
    abreviation,
  });
  await d.save();
  return d;
};
const createPostes = async (postes) => {
  let d = [];
  postes.map(async (p) => {
    let n = await createPoste(p);
    d.push(n);
  });
  return d;
};
const createMatch = async (m) => {
  const {
    idEquipe,
    Equ_idEquipe,
    idCompetition,
    dateHeureMatch,
    finDateHeureMatch,
    arbitre_nom,
  } = m;
  let d = new Matchs({
    idEquipe: ObjectId(idEquipe),
    Equ_idEquipe: ObjectId(Equ_idEquipe),
    idCompetition: ObjectId(idCompetition),
    idProgressionType: ObjectId("60df6680f56ae1297ca71c2f"),
    dateHeureMatch,
    finDateHeureMatch,
    scoreEq1: 0,
    scoreEq2: 0,
    arbitre_nom,
  });
  await d.save();
  return d;
};
const createProgressionTypes = async (m) => {
  let d = [
    new progression_type({
      _id: ObjectId(),
      nomProgressionType: "en attente",
      nomProgressionTypeMLG: "andrasana",
    }),
    new progression_type({
      _id: ObjectId(),
      nomProgressionType: "en cours",
      nomProgressionTypeMLG: "eo am-panatanterahana",
    }),
    new progression_type({
      _id: ObjectId(),
      nomProgressionType: "terminé",
      nomProgressionTypeMLG: "tapitra",
    }),
  ];
  await progression_type.insertMany(d);
  return d;
};
const teste = async (m) => {
  let d = [new type_pari({ nomTypePari: "pari" })];
  await type_pari.insertMany(d);
  return d;
};
const createJoueurCsv = async (d) => {
  d.map((j) => {
    j._id = ObjectId();
    delete j["﻿_"];
  });
  await joueurs.insertMany(d);
  return d;
};
const matchs = async (idProgressionType) => {
  const d = await Matchs.aggregate([
    {
      $lookup: {
        from: "Equipes",
        localField: "idEquipe",
        foreignField: "_id",
        as: "equipe1",
      },
    },
    {
      $unwind: "$equipe1",
    },
    {
      $lookup: {
        from: "Equipes",
        localField: "Equ_idEquipe",
        foreignField: "_id",
        as: "equipe2",
      },
    },
    {
      $unwind: "$equipe2",
    },
  ]);
  console.log(Matchs.findOne().populate("Equipe"));
  return d;
};
module.exports = {
  createCompetition,
  createEquipe,
  createFormation,
  createFormations,
  formations,
  getEquipes,
  createJoueur,
  createPostes,
  createMatch,
  createJoueurCsv,
  teste,
  matchs,
};
