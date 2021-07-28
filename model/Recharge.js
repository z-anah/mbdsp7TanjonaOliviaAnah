const { ObjectId, Decimal128 } = require("mongodb");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const mongooseUniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let Recharge = Schema({
  date_recharge: { type: Date, default: new Date() },
  montant: Decimal128,
});

Recharge.plugin(aggregatePaginate);
Recharge.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Recharge", Recharge, "Recharge");
