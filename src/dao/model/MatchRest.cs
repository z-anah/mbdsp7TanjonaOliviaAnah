using System.Collections.Generic;

namespace pari.src.dao.view.user_control.panel
{
    public class MatchRest
    {
        public bool status { get; set; }
        public string message { get; set; }
        public MatchModel data { get; set; }
    }
    public class MatchEquipeFormationRest
    {
        public bool status { get; set; }
        public string message { get; set; }
        public MatchEquipeFormationModel data { get; set; }
    }
    public class MatchsRest
    {
        public bool status { get; set; }
        public string message { get; set; }
        public List<MatchModel> data { get; set; }
    }
    public class MatchsEquipeRest
    {
        public bool status { get; set; }
        public string message { get; set; }
        public List<MatchEquipeModel> data { get; set; }
    }




}

