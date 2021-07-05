using Newtonsoft.Json;

namespace pari.src.dao.service
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
    public class FileModel
    {
        [JsonProperty("fieldname")]
        public string Fieldname { get; set; }

        [JsonProperty("originalname")]
        public string Originalname { get; set; }

        [JsonProperty("encoding")]
        public string Encoding { get; set; }

        [JsonProperty("mimetype")]
        public string Mimetype { get; set; }

        [JsonProperty("destination")]
        public string Destination { get; set; }

        [JsonProperty("filename")]
        public string Filename { get; set; }

        [JsonProperty("path")]
        public string Path { get; set; }

        [JsonProperty("size")]
        public int Size { get; set; }
    }



}
