let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let MatchSchema = Schema({
  idmatch: Number,
  idequipe: Number,
  idformation: Number,
  for_idformation: Number,
  agejoueur: Number,
  equ_idequipe: Number,
  idcompetion: Number,
  dateheurematch: Date,
});

MatchSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Matchs", MatchSchema, "Matchs");
