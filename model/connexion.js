let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const util = require("util");

const uri ="mongodb+srv://tanjona:Mongo220799@cluster0.ejbhp.mongodb.net/pari?retryWrites=true&w=majority";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  };
let connection = mongoose.connect(uri, options).then(
    () => {
      console.log("at URI = " + uri);
    },
    (err) => {
      console.log("Erreur de connexion: ", err);
    }
  );
 module.exports = connection;
