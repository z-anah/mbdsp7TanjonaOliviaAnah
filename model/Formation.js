
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let FormationsSchema = Schema({
 idformation: Number,
 nomformation: String
});


FormationSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Formations", FormationsSchema,"Formations");
