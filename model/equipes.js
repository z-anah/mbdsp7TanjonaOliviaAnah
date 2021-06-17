
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let EquipesSchema = Schema({
 idequipe: Number,
 idformation: Number,
 nomequipe: String,
 logoequipe: String,
 nomcoachequipe: String,
 Descriptionequipe: Text
});


EquipeSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Equipes", EquipeSchema,"Equipes");
