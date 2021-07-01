let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let JoueurSchema = Schema({
  idjoueur: Number,
  idposte: Number,
  idequipe: String,
  nomjoueur: String,
  profiljoueur: String,
  agejoueur: Number,
  taillejoueur: Number,
  poindsjoueur: Number,
});

JoueurSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Joueurs", JoueurSchema, "Joueurs");
