const config = require("../config/index");
var serviceRole = require("../service/role");
function listRoles(req, res) {
  serviceRole
  .getListRoles(req, res)
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
function adminRole(req, res) {
  serviceRole
  .getRoleAdmin(req, res)
  .then((value) => {
    if (value) res.send(value);
    else res.send({ status: false });
  })
  .catch((err) =>
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
    })
  );
}
module.exports = { listRoles,adminRole };
