const { ObjectId } = require("bson");
const Mongoose = require("mongoose");
const But = require("../model/but");
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
      $match: {
        idProgressionType: ObjectId(idProgressionType),
      },
    },
    ...matchsEquipesFilter,
  ]);
  return d;
};
const match = async (_id) => {
  const eff1 = equipeFormationFilter(1);
  const eff2 = equipeFormationFilter(2);
  const js1 = joueursFilter(1);
  const js2 = joueursFilter(2);
  const d = await Matchs.aggregate([
    {
      $match: { _id: ObjectId(_id) },
    },
    ...matchsEquipesFilter,
    ...eff1,
    ...eff2,
    ...js1,
    ...js2,
  ]);
  return d[0];
};

const playMatch = async (_id, idProgressionType) => {
  let query = { _id };
  let update = { idProgressionType: ObjectId(idProgressionType) };
  await Matchs.findByIdAndUpdate(query, update);
  return await Matchs.findById(query);
};

const butMatch = async (but) => {
  let { id_match, id_joueur, scoreEq1, scoreEq2 } = but;

  let d = {};
  d.but = new But({
    id_match: ObjectId(id_match),
    id_joueur: ObjectId(id_joueur),
  });
  await d.but.save();
  let query = { _id: ObjectId(id_match) };
  let update = { scoreEq1, scoreEq2 };
  await Matchs.findByIdAndUpdate(query, update);
  d.match = await Matchs.findByIdAndUpdate(query);
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
  match,
  playMatch,
  butMatch,
};

joueursFilter = (i) => {
  return [
    {
      $lookup: {
        from: "Joueurs",
        localField: `equipe${i}._id`,
        foreignField: "idequipe",
        as: `joueurs${i}`,
      },
    },
  ];
};

equipeFormationFilter = (i) => {
  return [
    {
      $lookup: {
        from: "Formations",
        localField: `equipe${i}.idformation`,
        foreignField: "_id",
        as: `formation${i}`,
      },
    },
    {
      $unwind: `$formation${i}`,
    },
  ];
};

const matchsEquipesFilter = [
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
];
