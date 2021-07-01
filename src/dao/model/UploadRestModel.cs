using Newtonsoft.Json;

namespace pari.src.dao.view.user_control.panel
{
    public class UploadRestModel
    {
        [JsonProperty("status")]
        public bool Status { get; set; }

        [JsonProperty("data")]
        public string Data { get; set; }
    }


}
