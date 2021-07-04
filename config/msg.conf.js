const fr = {
  MSG_I0001: "Ajout modérateur réussi !",
  MSG_I0002: "Modification réussi !",
  MSG_I0003: "Changement mot de passe réussi !",
  MSG_I0004: "Email d'envoi de récupération envoyé",
  MSG_I0005: "Ajout compétition réussi !",
  MSG_I0006: "Requete réussi !",
  MSG_I0007: "Liste utilisateur!",
  MSG_I0008: "Suppression modérateur réussi!"
};
const mlg = {
  MSG_I0001: "Tafiditra ny moderateur !",
  MSG_I0002: "Tontosa ny fanovana ny mombamomba anao!",
  MSG_I0003: "Fanovana teny miafina tontosa !",
  MSG_I0004: "Email d'envoi de récupération envoyé",
};
const fr_err = {
  MSG_E0001: "Email ou mot de passe invalide !",
  MSG_E0002: "Télécharger une image !",
  MSG_E0003: "Taille maximum : 5MB !",
  MSG_E0004: "Email dupliqué !",
  MSG_E0005: "Nom dupliqué !",
  MSG_E0006: "Fichier autorisé :  .png, .jpg et .jpeg !",
  MSG_E0007:
    "Une erreur interne est survenue, veuillez réessayer ultérieurement !",
  MSG_E0008: "Utilisateur introuvable !",
  MSG_E0009: "Modification échoué !Veuillez ressayer ultérieurement !",
  MSG_E0010: "Modification échoué.Ancien mot de passe invalide !",
  MSG_E0011: "Email introuvable",
  MSG_E0012: "Liste  introuvable.",
  MSG_E0013: "Suppression modérateur échoué!"
};
const mlg_err = {
  MSG_E0001: "Adiresy mailaka na tenimiafina diso !",
  MSG_E0002: "Ampidiro ny sary !",
  MSG_E0003: "Farany ambony : 5MB!",
  MSG_E0004: "Ovao ny adiresy mailaka !",
  MSG_E0005: "Ovao ny anarana !",
  MSG_E0006: "Tokony ho: .png, .jpg ary .jpeg",
  MSG_E0007: "Mbola amin'ny fanamboarana, miverena amin'ny ora vitsy !",
  MSG_E0008: "Anarana tsy hita",
  MSG_E0009: "Fanovana mombamomba tsy tanteraka!Avereno azafady!",
  MSG_E0010: "Fanovana tenimiafina tsy tanteraka.Diso ny teny miafina taloha!",
  MSG_E0011: "Adiresy mailaka tsy hita",
};
module.exports = {
  FR: { info: fr, error: fr_err },
  MLG: { info: mlg, error: mlg_err },
};
