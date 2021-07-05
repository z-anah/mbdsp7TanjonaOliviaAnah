using Newtonsoft.Json;
using System;

namespace pari.src.dao.service
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
    public class CompetitionModel
    {
        [JsonProperty("_id")]
        public string Id { get; set; }

        [JsonProperty("nomcompetition")]
        public string Nomcompetition { get; set; }

        [JsonProperty("datedebutcompetition")]
        public DateTime Datedebutcompetition { get; set; }

        [JsonProperty("datefincompetition")]
        public DateTime Datefincompetition { get; set; }

        [JsonProperty("__v")]
        public int V { get; set; }
    }


}
