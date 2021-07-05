using Newtonsoft.Json;
using System.Collections.Generic;

namespace pari.src.dao.service
{
    public class JoueurCreateCsvRestData
    {
        [JsonProperty("file")]
        public FileModel File { get; set; }

        [JsonProperty("joueurs")]
        public List<JoueurModel> Joueurs { get; set; }
    }



}
