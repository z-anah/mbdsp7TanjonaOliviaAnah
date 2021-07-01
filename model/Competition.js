let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
var uniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let CompetitionSchema = Schema({
  nomcompetition: { type: String, unique: true, required: true },
  datedebutcompetition: Date,
  datefincompetition: Date,
});

CompetitionSchema.plugin(aggregatePaginate);
CompetitionSchema.plugin(uniqueValidator);

module.exports = mongoose.model(
  "Competitions",
  CompetitionSchema,
  "Competitions"
);
