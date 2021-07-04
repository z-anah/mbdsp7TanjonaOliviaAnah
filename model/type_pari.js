let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const mongooseUniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let type_pari = Schema({
  nomTypePari: { type: String, unique: true, required: true },
});

type_pari.plugin(aggregatePaginate);
type_pari.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("type_pari", type_pari, "type_pari");
