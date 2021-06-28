const config = require("../config/index");
var serviceMatch = require("../service/match");
function listMatchs(req, res) {
    serviceMatch.getMatch(req, res)
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
module.exports = { listMatchs };
