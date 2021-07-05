using Newtonsoft.Json;

namespace pari.src.dao.view.user_control.panel
{
    public class ErrorRestModel
    {
        [JsonProperty("status")]
        public bool Status { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("desc")]
        public string Desc { get; set; }
    }
}
