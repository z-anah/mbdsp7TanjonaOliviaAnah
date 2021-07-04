let Roles = require("../model/Roles");
function getListRoles(req, res) {
  return new Promise((resolve, reject) => {
    Roles.find((err, roles) => {
      if (err) reject(err);
      else {
        resolve(roles);
      }
    });
  });
}

function getRoleModerateur(req,res){
  return new Promise((resolve, reject) => {
    Roles.findOne(
      { nomRole: "Modérateur" },
      (err, role) => {
        if (err) reject(err);
        else {
          if (role != null) resolve(role);
          else resolve(false);
        }
      })
  });
}
function getRoleAdmin(req,res){
  return new Promise((resolve, reject) => {
    Roles.findOne(
      { nomRole: "Administrateur" },
      (err, role) => {
        if (err) reject(err);
        else {
          if (role != null) resolve(role);
          else resolve(false);
        }
      })
  });
}
function getRoleClient(req,res){
  return new Promise((resolve, reject) => {
    Roles.findOne(
      { nomRole: "Client" },
      (err, role) => {
        if (err) reject(err);
        else {
          if (role != null) resolve(role);
          else resolve(false);
        }
      })
  });
}

module.exports = { getListRoles, getRoleModerateur,getRoleAdmin,getRoleClient };
