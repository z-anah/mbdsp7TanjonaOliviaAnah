using Newtonsoft.Json;

namespace pari.src.dao.view.user_control.panel
{
    public class Combo
    {
        [JsonProperty("_id")]
        public string Value { get; set; }

        [JsonProperty("nomformation")]
        public string Text { get; set; }
    }


}
