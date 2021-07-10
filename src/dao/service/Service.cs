using Newtonsoft.Json;
using pari.src.dao.utilities;
using pari.src.dao.view.user_control.panel;
using RestSharp;
using System;
using System.Text;
using System.Threading.Tasks;

namespace pari.src.dao.service
{
    class Service
    {
        public static async Task<FormationsRest> getFormations()
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/formations");
            var json = await client.GetAsync<string>(request);
            return JsonConvert.DeserializeObject<FormationsRest>(json);
        }

        public static async Task<EquipesRest> getEquipes()
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/equipes");
            var json = await client.GetAsync<string>(request);
            return JsonConvert.DeserializeObject<EquipesRest>(json);
        }
        public static async Task<CompetitionRest> createCompetitionAsync(string nomCompetition, string dateDebut, string dateFin)
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/competition/create");
            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(new { nomCompetition, dateDebut, dateFin });
            return await client.PostAsync<CompetitionRest>(request);
        }


        public static async Task<EquipeRest> createEquipe(string idformation, string nomequipe, string logoequipe, string nomcoachequipe, string Descriptionequipe)
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/equipe/create");
            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(new
            {
                idformation,
                nomequipe,
                logoequipe,
                nomcoachequipe,
                Descriptionequipe
            });
            return await client.PostAsync<EquipeRest>(request);
        }

        public static string upload(string text)
        {
            var res = "";
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("upload", Method.POST);

            request.AddFile("profil", text, "image/png");
            request.AlwaysMultipartFormData = true;

            IRestResponse response = client.Execute(request);
            if (response.IsSuccessful)
            {
                UploadRestModel myDeserializedClass = JsonConvert.DeserializeObject<UploadRestModel>(response.Content);
                res = myDeserializedClass.Data;
            }

            return res;
        }

        public static async Task<JoueurRest> createJoueur(int idposte, string idequipe, string nomjoueur, string profiljoueur, string agejoueur, string taillejoueur, string poidsjoueur)
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/joueur/create");
            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(new
            {
                idposte,
                idequipe,
                nomjoueur,
                profiljoueur,
                agejoueur = DateTime.Today.Year - Convert.ToDateTime(agejoueur).Year,
                taillejoueur,
                poidsjoueur
            });
            return await client.PostAsync<JoueurRest>(request);
        }

        internal static IRestResponse UploadCsv(string text)
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/joueur/create/csv", Method.POST);

            request.AddFile("file", text, "text/csv");
            request.AlwaysMultipartFormData = true;

            IRestResponse response = client.Execute(request);
            return response;

        }

        internal static async Task<CompetitionsRest> Evenements()
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/listeCompetition");
            var json = await client.GetAsync<string>(request);
            return JsonConvert.DeserializeObject<CompetitionsRest>(json);
        }

        internal static async Task<MatchsEquipeRest> Matchs(String idProgressionType)
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/matchs");
            var param = new { idProgressionType };

            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(param);
            var json = await client.PostAsync<string>(request);
            return JsonConvert.DeserializeObject<MatchsEquipeRest>(json);
        }

        internal static async Task MatchProgression(String _id, String idProgressionType)
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/match/progression");
            var param = new { _id, idProgressionType };

            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(param);
            var json = await client.PostAsync<string>(request);
        }

        internal static async Task<MatchEquipeFormationRest> Match(String _id)
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/match");
            var param = new { _id };

            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(param);
            var json = await client.PostAsync<string>(request);
            return JsonConvert.DeserializeObject<MatchEquipeFormationRest>(json);
        }

        internal static async Task<MatchRest> createMatch(string idCompetition, string idEquipe, string Equ_idEquipe, string arbitre_nom, DateTime dateHeureMatch, DateTime finDateHeureMatch)
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/match/create");
            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(new
            {
                idCompetition,
                idEquipe,
                Equ_idEquipe,
                arbitre_nom,
                dateHeureMatch,
                finDateHeureMatch
            });
            return await client.PostAsync<MatchRest>(request);
        }
    }


}
