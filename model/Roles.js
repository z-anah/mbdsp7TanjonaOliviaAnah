
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let RoleSchema = Schema({
 idRole: Number,
 nomRole: String
});


RoleSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Role", RoleSchema,"Role");
