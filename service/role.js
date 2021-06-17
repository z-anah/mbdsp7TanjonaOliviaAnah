let Roles = require('../model/roles');
function getListRoles(req, res){
    return new Promise((resolve, reject) => {
        Roles.find((err, roles) => {
            if(err) reject(err);
            else{
                resolve(roles);
            } 
        });
    })
}

module.exports = { getListRoles }