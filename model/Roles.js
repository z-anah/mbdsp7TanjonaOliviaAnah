
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let RolesSchema = Schema({
 idRole: Number,
 nomRole: String
});


RolesSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Roles", RolesSchema,"roles");
