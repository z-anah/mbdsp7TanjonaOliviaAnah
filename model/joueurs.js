const { ObjectId } = require("bson");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let JoueurSchema = Schema({
  idposte: Number,
  idequipe: ObjectId,
  nomjoueur: String,
  profiljoueur: { type: String, default: "default.png" },
  agejoueur: Number,
  taillejoueur: Number,
  poidsjoueur: Number,
});

JoueurSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Joueurs", JoueurSchema, "Joueurs");
