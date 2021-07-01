using Newtonsoft.Json;

namespace pari.src.dao.view.user_control.panel
{
    public class FormationModel
    {
        [JsonProperty("_id")]
        public string Id { get; set; }

        [JsonProperty("nomformation")]
        public string Nomformation { get; set; }

        [JsonProperty("__v")]
        public int V { get; set; }
    }


}
