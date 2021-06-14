
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let EquipeSchema = Schema({
 idequipe: Number,
 idformation: Number,
 nomequipe: String,
 logoequipe: String,
 nomcoachequipe: String,
 Descriptionequipe: Text
});


EquipeSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Equipe", EquipeSchema,"Equipe");
