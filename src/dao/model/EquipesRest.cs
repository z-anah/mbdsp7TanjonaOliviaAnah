using Newtonsoft.Json;
using System.Collections.Generic;

namespace pari.src.dao.view.user_control.panel
{
    public class EquipesRest
    {
        [JsonProperty("status")]
        public bool Status { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("data")]
        public List<EquipeModel> Data { get; set; }
    }
}
