let Competition = require("../model/Competition");
let equipes = require("../model/equipes");
let Formation = require("../model/Formation");
const createCompetition = async (nomCompetition, dateDebut, dateFin) => {
  let c = new Competition({
    nomcompetition: nomCompetition,
    datedebutcompetition: dateDebut,
    datefincompetition: dateFin,
  });
  await c.save();
  return c;
};
const createEquipe = async () => {
  //   let m = new equipes({
  //     idformation: Number,
  //     nomequipe: String,
  //     logoequipe: String,
  //     nomcoachequipe: String,
  //     Descriptionequipe: Text,
  //   });
  //   await m.save();
  //   return m;
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

module.exports = {
  createCompetition,
  createEquipe,
  createFormation,
  createFormations,
};
