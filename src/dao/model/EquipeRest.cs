using Newtonsoft.Json;

namespace pari.src.dao.view.user_control.panel
{
    public class EquipeRest
    {
        [JsonProperty("status")]
        public bool Status { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("data")]
        public EquipeModel Data { get; set; }
    }


}
