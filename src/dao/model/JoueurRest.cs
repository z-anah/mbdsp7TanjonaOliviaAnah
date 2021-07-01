using Newtonsoft.Json;

namespace pari.src.dao.service
{
    public class JoueurRest
    {
        [JsonProperty("status")]
        public bool Status { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("data")]
        public JoueurModel Data { get; set; }
    }


}
