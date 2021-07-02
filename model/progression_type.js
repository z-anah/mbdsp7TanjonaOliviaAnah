const { ObjectId } = require("mongodb");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const mongooseUniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let progression_type = Schema({
  nomProgressionType: { type: String, unique: true, required: true },
  nomProgressionTypeMLG: { type: String, unique: true, required: true },
});

progression_type.plugin(aggregatePaginate);
progression_type.plugin(mongooseUniqueValidator);

module.exports = mongoose.model(
  "progression_type",
  progression_type,
  "progression_type"
);
