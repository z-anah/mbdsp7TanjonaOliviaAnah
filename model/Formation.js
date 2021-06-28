let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const mongooseUniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let FormationSchema = Schema({
  nomformation: { type: String, unique: true, required: true },
});

FormationSchema.plugin(aggregatePaginate);
FormationSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Formations", FormationSchema, "Formations");
