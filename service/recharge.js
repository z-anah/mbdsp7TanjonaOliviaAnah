let Recharge = require("../model/Recharge");
let mongoose = require("mongoose");
function recharge(req, res){
    return new Promise((resolve, reject) => {
        Recharge.aggregate([
        {
            $match :{}
        },
        {
            $group: 
            {
                _id: {
                    year: { $year: "$date_recharge" },
                    month: { $month: "$date_recharge" }
                },
                total: { $sum: "$montant" }
            }
        },
        { "$sort": { "_id": 1 }},

        ],function(err,res){
            resolve({"data" : res});
        })
    })
}

function getDataRecharge(req,res){
    return new Promise((resolve, reject) => {
        recharge(req,res).then((value)=>{
            dataLab = []
            dataMont = []
            somme = 0;
            var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            if(value.data){
                for(var i = 0; i<value.data.length; i++){
                  
                    var monthName=months[value.data[i]._id.month-1];
                    var lab = monthName+"-"+value.data[i]._id.year;
                    var mont = parseFloat(value.data[i].total)
                    somme+= mont
                    dataLab.push(lab);
                    dataMont.push(mont);
                }
            }
            resolve({"dataLabel": dataLab, "dataMontant":dataMont,"somme": somme})
        })
    })
}
module.exports = { getDataRecharge }