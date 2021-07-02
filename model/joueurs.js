const { ObjectId } = require("bson");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let JoueurSchema = Schema({
  idjoueur: Number,
  idposte: ObjectId,
  idequipe: String,
  nomjoueur: String,
  profiljoueur: String,
  agejoueur: Number,
  taillejoueur: Number,
  poidsjoueur: Number,
});

JoueurSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Joueurs", JoueurSchema, "Joueurs");
