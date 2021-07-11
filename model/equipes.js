let mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let EquipeSchema = Schema({
  _id: ObjectId,
  idformation: ObjectId,
  nomequipe: String,
  logoequipe: String,
  nomcoachequipe: String,
  Descriptionequipe: String,
});

EquipeSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Equipes", EquipeSchema, "Equipes");
