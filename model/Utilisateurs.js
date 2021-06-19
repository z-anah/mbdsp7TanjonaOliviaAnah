const { Double } = require("bson");
let mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let UtilisateurSchema = Schema({
  idUtilisateur: { type: Number, unique: true, required: true },
  nomCompletUtilisateur: { type: String, unique: true, required: true },
  emailUtilisateur: { type: String, unique: true, required: true },
  dateNaissanceUtilisateur: { type: Date, required: true },
  profilUtilisateur: { type: String, unique: true },
  motdepasseUtilisateur: { type: String, required: true },
  soldeUtilisateur: { type: Number, required: true },
  idRole: { type: Number, required: true },
});

UtilisateurSchema.plugin(uniqueValidator);
UtilisateurSchema.plugin(aggregatePaginate);

module.exports = mongoose.model(
  "Utilisateurs",
  UtilisateurSchema,
  "utilisateurs"
);
