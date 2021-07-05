import {Formation } from './Formation.model';

export class Competition {
    _id?:string;
    id:number;
    nomcompetition:string;
    datedebutcompetition:Date;
    datefincompetition:Date;
    formation: Formation;
  }