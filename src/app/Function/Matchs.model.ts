import {Formation } from './Formation.model';
import {Equipe} from "./Equipe.model";

// import {Equipes1} from "./Equipe.model";
// import {Equ_equipes_equipe} from "./Equipe.model";

export class Matchs {
    _id?:string;
    id:number;
    idEquipe: string;
    Equ_idEquipe: string;
    idCompetition: string;
    idFormation: string;
    For_idFormation: string;
    idProgressionType: string;
    dateHeureMatch: Date;
    finDateHeureMatch: Date;
    scoreEq1: Number;
    scoreEq2: Number;
    Equipes1: Equipe;
    Equ_equipes_equipe: Equipe;
    Formation: Formation
  }