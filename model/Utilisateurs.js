
const { Double } = require("bson");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let UtilisateurSchema = Schema({
 idUtilisateur: Number,
 nomComplet: String,
 emailUtilisateur : String,
 dateNaissanceUtilisateur : Date,
 profilUtilisateur : String,
 soldeUtilisateur : Double,
 idRole : Number
});


UtilisateurSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Utilisateur", UtilisateurSchema,"Utilisateur");
