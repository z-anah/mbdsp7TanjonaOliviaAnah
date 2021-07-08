﻿using System;

namespace pari.src.dao.view.user_control.panel
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
    public class MatchModel
    {
        public string _id { get; set; }
        public string idEquipe { get; set; }
        public string Equ_idEquipe { get; set; }
        public string idCompetition { get; set; }
        public string idFormation { get; set; }
        public string For_idFormation { get; set; }
        public string idProgressionType { get; set; }
        public DateTime dateHeureMatch { get; set; }
        public DateTime finDateHeureMatch { get; set; }
        public int scoreEq1 { get; set; }
        public int scoreEq2 { get; set; }
        public int __v { get; set; }
    }
    public class MatchEquipeModel
    {
        public string _id { get; set; }
        public string idEquipe { get; set; }
        public string Equ_idEquipe { get; set; }
        public string idCompetition { get; set; }
        public string idFormation { get; set; }
        public string For_idFormation { get; set; }
        public string idProgressionType { get; set; }
        public DateTime dateHeureMatch { get; set; }
        public DateTime finDateHeureMatch { get; set; }
        public int scoreEq1 { get; set; }
        public int scoreEq2 { get; set; }
        public int __v { get; set; }
        public EquipeModel equipe1 { get; set; }
        public EquipeModel equipe2 { get; set; }
    }


}

