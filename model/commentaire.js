const { ObjectId } = require("mongodb");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const mongooseUniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let commentaire = Schema({
  commentaire: { type: String, unique: true, required: true },
  est_signale: Boolean,
  id_utilisateur: { type: Number, required: true,ref: 'utilisateurs' }
});

commentaire.plugin(aggregatePaginate);
commentaire.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("commentaire", commentaire, "commentaire");
