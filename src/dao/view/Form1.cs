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

namespace pari
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            FormBorderStyle = FormBorderStyle.FixedSingle;
            MaximizeBox = false;
            MinimizeBox = false;
            WelcomeInit();
            // LoginInit();
            pariSideBar1Init();
        }
        private void WelcomeInit()
        {
            this.match1.Visible = false;
            this.joueur1.Visible = false;
            this.equipe1.Visible = false;
            this.competition1.Visible = false;
            this.pariSideBar1.Visible = false;
        }
        private void login1SeConnecter(object sender, EventArgs ev)
        {
            try
            {
                login1.isValide();
            }
            catch (Exception e)
            {
                Console.WriteLine("PARI ERROR: " + e.Message);
            }
        }
        private void LoginInit()
        {
            this.login1.Visible = true;
            this.login1.Button.Click += new EventHandler(login1SeConnecter);
        }

        private void pariSideBar1Init()
        {
            WelcomeInit();
            this.pariSideBar1.Visible = true;
            this.competition1.Visible = true;
        }

        private void pariSideBar1_Load(object sender, EventArgs e)
        {

        }
    }
}
