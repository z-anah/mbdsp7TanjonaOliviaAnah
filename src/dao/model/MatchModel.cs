using pari.src.dao.service;
using System;
using System.Collections.Generic;

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
    public class MatchEquipeFormationModel
    {
        public string _id { get; set; }
        public string idEquipe { get; set; }
        public string arbitre_nom { get; set; }
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
        public FormationModel formation1 { get; set; }
        public FormationModel formation2 { get; set; }
        public List<JoueurModel> joueurs1 { get; set; }
        public List<JoueurModel> joueurs2 { get; set; }
    }


}

