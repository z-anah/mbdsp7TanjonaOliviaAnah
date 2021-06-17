
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let JoueursSchema = Schema({
 idjoueur: Number,
 idposte: Number,
 idequipe: Number,
 nomjoueur: String,
 profiljoueur: String,
 agejoueur: Number,
 taillejoueur: Number,
 poindsjoueur: Number
});


JoueurSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Joueurs", JoueurSchema,"Joueurs");
