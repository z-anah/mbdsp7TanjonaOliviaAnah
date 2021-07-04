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
    idFormation,
    For_idFormation,
    idProgressionType,
    dateHeureMatch,
    finDateHeureMatch,
    scoreEq1,
    scoreEq2,
  } = m;
  let d = new Matchs({
    idEquipe: ObjectId(idEquipe),
    Equ_idEquipe: ObjectId(Equ_idEquipe),
    idCompetition: ObjectId(idCompetition),
    idFormation: ObjectId(idFormation),
    For_idFormation: ObjectId(For_idFormation),
    idProgressionType: ObjectId(idProgressionType),
    dateHeureMatch,
    finDateHeureMatch,
    scoreEq1,
    scoreEq2,
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
  await joueurs.insertMany(d);
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
};
