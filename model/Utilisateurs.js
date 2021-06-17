
const { Double } = require("bson");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let UtilisateurSchema = Schema({
 idUtilisateur: Number,
 nomCompletUtilisateur: String,
 emailUtilisateur : String,
 dateNaissanceUtilisateur : Date,
 profilUtilisateur : String,
 motdepasseUtilisateur: String,
 soldeUtilisateur : Number,
 idRole : Number
});


UtilisateurSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Utilisateurs", UtilisateurSchema,"utilisateurs");
