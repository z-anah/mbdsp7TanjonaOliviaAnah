using Newtonsoft.Json;

namespace pari.src.dao.service
{
    public class JoueurCreateCsvRest
    {
        [JsonProperty("status")]
        public bool Status { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("data")]
        public JoueurCreateCsvRestData Data { get; set; }
    }



}
