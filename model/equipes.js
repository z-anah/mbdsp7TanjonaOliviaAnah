const { ObjectId } = require("bson");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let EquipeSchema = Schema({
  idformation: ObjectId,
  nomequipe: String,
  logoequipe: String,
  nomcoachequipe: String,
  Descriptionequipe: String,
});

EquipeSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Equipes", EquipeSchema, "Equipes");
