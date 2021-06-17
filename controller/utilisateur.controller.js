var serviceUser = require('../service/utilisateur')
function signUp(req,res){
	serviceUser.register(req,res).then((value) =>{
		if(value.status) res.send({status : true,message : "Ajout modérateur réussi !"});
		else res.send({status : false,message : value.message});
	});
}
function testDoublonMail(req,res){
	serviceUser.testDoublonMail(req,res).then((value) =>{
		if(value) res.send({status : true, message : "Email utilisateur dupliqué ."});
		else res.send({status : false,message : value.message});
	});
}
module.exports = { signUp ,testDoublonMail }