using pari.src.dao.view.user_control;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using RestSharp;
using RestSharp.Authenticators;
using pari.src.dao.utilities;
using pari.src.dao.service;
using pari.src.dao.view.user_control.panel;
using System.Globalization;

namespace pari
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            init();
            temp();
            LoginInit();
        }
        private void temp()
        {
            /*Task<ListRolesRest> teste = listRoles();
            ListRolesRest t = await teste;
            Console.WriteLine(t.Status);*/
            this.login1.TextBox.TextBox.Text = "zulmianah@gmail.com";
            this.login1.MotPasse.TextBox.Text = "fahmi230995";
        }
        private void init()
        {
            FormBorderStyle = FormBorderStyle.FixedSingle;
            MaximizeBox = false;
            MinimizeBox = false;
            this.login1.Button.Click += new EventHandler(login1SeConnecter);
            this.pariSideBar1.Competition.Click += new EventHandler(fenetreAjoutCompetition);
            this.pariSideBar1.Equipe.Click += new EventHandler(fenetreAjoutEquipe);
            this.pariSideBar1.Joueur.Click += new EventHandler(fenetreAjoutJoueur);
            this.pariSideBar1.Match.Click += new EventHandler(fenetreAjoutMatch);
            this.pariSideBar1.Deconnecter.Click += new EventHandler(deconnecter);
        }
        private void fenetreAjoutJoueur(object sender, EventArgs ev)
        {
            initFenetre();
            this.pariSideBar1.Visible = true;
            this.joueur1.Visible = true;
        }
        private void deconnecter(object sender, EventArgs ev)
        {
            initFenetre();
            this.login1.Visible = true;
        }
        private void fenetreAjoutMatch(object sender, EventArgs ev)
        {
            initFenetre();
            this.pariSideBar1.Visible = true;
            this.match1.Visible = true;
        }
        private void fenetreAjoutEquipe(object sender, EventArgs ev)
        {
            initFenetre();
            this.pariSideBar1.Visible = true;
            this.equipe1.Visible = true;
        }
        private void fenetreAjoutCompetition(object sender, EventArgs ev)
        {
            initFenetre();
            this.pariSideBar1.Visible = true;
            this.competition1.Visible = true;
        }
        private void initFenetre()
        {
            this.match1.Visible = false;
            this.joueur1.Visible = false;
            this.equipe1.Visible = false;
            this.competition1.Visible = false;
            this.pariSideBar1.Visible = false;
            this.login1.Visible = false;
            this.simulation1.Visible = false;
        }
        private void login1SeConnecter(object sender, EventArgs ev)
        {
            try
            {
                login1.isValide();
                pariSideBar1Init();
                matchs();
            }
            catch (Exception e)
            {
                Console.WriteLine("PARI ERROR: " + e.Message);
            }
        }

        private async void matchs()
        {
            Cursor = Cursors.WaitCursor;
            MatchsEquipeRest matchs = await Service.Matchs("60df6680f56ae1297ca71c2f");
            foreach (MatchEquipeModel m in matchs.data)
            {
                Button button = new Button();
                button.Click += new EventHandler(matchFenetre);
                // button.Size = new Size(200, 25);
                button.Size = new Size(200, 100);
                button.Text = $"{m.equipe1.Nomequipe} VS {m.equipe2.Nomequipe}\n{m.dateHeureMatch}";
                button.Tag = m._id;
                pariSideBar1.FlowLayoutPanel.Controls.Add(button);
            }
            Cursor = Cursors.Arrow;
        }
        private async void matchFenetre(object sender, EventArgs ev)
        {
            try
            {
                Cursor = Cursors.WaitCursor;
                initFenetre();
                this.pariSideBar1.Visible = true;
                this.simulation1.Visible = true;
                MatchEquipeFormationRest m = await Service.Match((string)((Button)sender).Tag);
                Cursor = Cursors.Arrow;
                CultureInfo culture = new CultureInfo("fr-CA", true);
                this.simulation1.PariTitle.Label.Text =
                    $"{m.data.dateHeureMatch.ToString("ddd, dd MMM yyyy HH':'mm':'ss zzz", culture)}\n" +
                    $"Arbitré par _ _ _ _\n{m.data.scoreEq1} VS {m.data.scoreEq2}";
            }
            catch (Exception e)
            {
                Console.WriteLine("PARI ERROR: " + e.Message);
            }
        }

        private void LoginInit()
        {
            initFenetre();
            this.login1.Visible = true;
        }

        private void pariSideBar1Init()
        {
            initFenetre();
            this.pariSideBar1.Visible = true;
        }

        private void pariSideBar1_Load(object sender, EventArgs e)
        {

        }

        private async Task<ListRolesRest> listRoles()
        {
            var client = new RestClient(Env.API_URL_NODE);
            var request = new RestRequest("listRoles");
            return await client.GetAsync<ListRolesRest>(request);
        }
    }

    internal class ListRolesRest
    {
        private bool status;
        private Role[] data;

        public bool Status { get => status; set => status = value; }
        internal Role[] Data { get => data; set => data = value; }
    }

    internal class Role
    {
        private string _id;
        private int idRole;
        private string nomRole;

        public string Id { get => _id; set => _id = value; }
        public int IdRole { get => idRole; set => idRole = value; }
        public string NomRole { get => nomRole; set => nomRole = value; }
    }
}
