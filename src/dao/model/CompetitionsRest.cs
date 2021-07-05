using Newtonsoft.Json;
using System.Collections.Generic;

namespace pari.src.dao.service
{
    public class CompetitionsRest
    {
        [JsonProperty("data")]
        public List<CompetitionModel> Data { get; set; }

        [JsonProperty("status")]
        public bool Status { get; set; }
    }


}
