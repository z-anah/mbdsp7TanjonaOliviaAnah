using pari.src.dao.utilities;
using pari.src.dao.view.user_control.panel;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace pari.src.dao.service
{
    class Service
    {
        public static async Task<CompetitionRest> createCompetitionAsync(string nomCompetition, string dateDebut, string dateFin)
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("/competition/create");
            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(new { nomCompetition, dateDebut, dateFin });
            return await client.PostAsync<CompetitionRest>(request);
        }
    }
}
