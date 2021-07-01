using Newtonsoft.Json;

namespace pari.src.dao.view.user_control.panel
{
    public class EquipeModel
    {
        [JsonProperty("_id")]
        public string Id { get; set; }

        [JsonProperty("idformation")]
        public string Idformation { get; set; }

        [JsonProperty("nomequipe")]
        public string Nomequipe { get; set; }

        [JsonProperty("logoequipe")]
        public string Logoequipe { get; set; }

        [JsonProperty("nomcoachequipe")]
        public string Nomcoachequipe { get; set; }

        [JsonProperty("Descriptionequipe")]
        public string Descriptionequipe { get; set; }

        [JsonProperty("__v")]
        public int V { get; set; }
    }


}
