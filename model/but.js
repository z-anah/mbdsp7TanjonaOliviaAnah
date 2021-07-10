const { ObjectId } = require("mongodb");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const mongooseUniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let but = Schema({
  id_match: { type: ObjectId, required: true },
  id_joueur: { type: ObjectId, required: true },
});

but.plugin(aggregatePaginate);
but.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("but", but, "but");
