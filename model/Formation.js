
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let FormationSchema = Schema({
 idformation: Number,
 nomformation: String
});


FormationSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Formation", FormationSchema,"Formation");
