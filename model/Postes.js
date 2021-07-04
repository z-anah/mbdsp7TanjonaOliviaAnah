
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let PostesSchema = Schema({
    idPoste: Number,
    nomPoste: String,
    abreviation: String
});


PostesSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Poste", PostesSchema, "Poste");
