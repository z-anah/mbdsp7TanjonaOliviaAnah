
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let CompetitionsSchema = Schema({
 idcompetition: Number,
 nomcompetition: String,
 datedebutcompetition: Date,
 datefincompetition: Date
});


CompetitionSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Competitions", CompetitionsSchema,"Competitions");
