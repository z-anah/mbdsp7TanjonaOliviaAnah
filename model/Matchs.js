
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let JoueurSchema = Schema({
 idmatch: Number,
 idequipe: Number,
 idformation: Number,
 for_idformation: Number,
 agejoueur: Number,
 equ_idequipe: Number,
 idcompetion: Number,
 dateheurematch: Date
});


MatchsSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Matchs", MatchsSchema,"Matchs");
