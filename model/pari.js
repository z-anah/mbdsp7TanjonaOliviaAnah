const { ObjectId, Decimal128 } = require("mongodb");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const mongooseUniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let pari = Schema({
  idUtilisateurs: ObjectId,
  idMatch: ObjectId,
  idTypePari: ObjectId,
  // -1   non correcte
  // 0    pas de resultat
  // 1    correcte
  estCorrecte: [-1, 0, 1],
  montantMise: Decimal128,
});

pari.plugin(aggregatePaginate);
pari.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("pari", pari, "pari");
