var serviceRole = require("../service/role");
function listRoles(req, res) {
  serviceRole.getListRoles(req, res).then((value) => {
    if (value) res.send({ data: value, status: true });
    else res.send({ status: false });
  });
}
module.exports = { listRoles };
