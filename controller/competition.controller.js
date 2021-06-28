const config = require("../config/index");
var serviceCompetition = require("../service/competition");
function listCompetitions(req, res) {
  serviceCompetition
    .getListCompetitions(req, res)
    .then((value) => {
      if (value) res.send({ data: value, status: true });
      else res.send({ status: false });
    })
    .catch((err) =>
      res.send({
        status: false,
        message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      })
    );
}
module.exports = { listCompetitions };
