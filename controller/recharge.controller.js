var serviceRecharge = require("../service/recharge");
function getRecharge(req, res) {
    serviceRecharge.getDataRecharge(req, res)
    .then((value) => {
        res.send({"dataLabel": value.dataLabel,"dataMontant": value.dataMontant, "somme":value.somme})
    })
}
module.exports = { getRecharge };