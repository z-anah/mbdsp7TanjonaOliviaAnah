using Newtonsoft.Json;
using System.Collections.Generic;

namespace pari.src.dao.view.user_control.panel
{
    public class Root
    {
        [JsonProperty("status")]
        public bool Status { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("data")]
        public List<FormationModel> Data { get; set; }
    }


}
