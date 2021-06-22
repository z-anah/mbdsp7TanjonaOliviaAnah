import { Roles } from "./roles";

export class Utilisateurs {
  _id?: String
  idUtilisateur: Number;
  nomCompletUtilisateur: String;
  emailUtilisateur : String;
  dateNaissanceUtilisateur ; Date;
  profilUtilisateur : String;
  motdepasseUtilisateur: String;
  soldeUtilisateur : Number;
  idRole : Number;
  role_utilisateur : Roles;
  repassword ?: String
}
