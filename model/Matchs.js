const { ObjectId } = require("mongodb");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let MatchSchema = Schema({
  idEquipe: ObjectId,
  Equ_idEquipe: ObjectId,
  idCompetition: ObjectId,
  idFormation: ObjectId,
  For_idFormation: ObjectId,
  idProgressionType: ObjectId,
  dateHeureMatch: Date,
  finDateHeureMatch: Date,
  scoreEq1: Number,
  scoreEq2: Number,
  arbitre_nom: String,
});

MatchSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Matchs", MatchSchema, "Matchs");
