using Newtonsoft.Json;

namespace pari.src.dao.service
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
    public class JoueurModel
    {
        [JsonProperty("_id")]
        public string Id { get; set; }

        [JsonProperty("idposte")]
        public int Idposte { get; set; }

        [JsonProperty("idequipe")]
        public string Idequipe { get; set; }

        [JsonProperty("nomjoueur")]
        public string Nomjoueur { get; set; }

        [JsonProperty("profiljoueur")]
        public string Profiljoueur { get; set; }

        [JsonProperty("agejoueur")]
        public int Agejoueur { get; set; }

        [JsonProperty("taillejoueur")]
        public double Taillejoueur { get; set; }

        [JsonProperty("poidsjoueur")]
        public double Poidsjoueur { get; set; }

        [JsonProperty("__v")]
        public int V { get; set; }
    }


}
