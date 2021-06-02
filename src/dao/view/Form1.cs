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
            //LoginInit();
            WelcomeInit();
        }
        private void WelcomeInit()
        {
        }
        private void LoginInit()
        {
            this.Size = new Size(320, 400);

            this.login1.TextBox.Label.Text = "Email";
            this.login1.TextBox.TextBox.PlaceholderText = "Email";
            this.login1.TextBox.LabelError.Text = "";

            this.login1.MotPasse.Label.Text = "Mot de passe";
            this.login1.MotPasse.TextBox.PlaceholderText = "Mot de passe";
            this.login1.MotPasse.LabelError.Text = "";
            this.login1.MotPasse.TextBox.PasswordChar = '*';

            //this.pariLogin.TextBox

            this.login1.LabelError.Text = "";

            /*DialogResult res = MessageBox.Show("Are you sure you want to Delete", "Confirmation", MessageBoxButtons.OKCancel, MessageBoxIcon.Information);
            if (res == DialogResult.OK)
            {
                MessageBox.Show("You have clicked Ok Button");
                //Some task…  
            }
            if (res == DialogResult.Cancel)
            {
                MessageBox.Show("You have clicked Cancel Button");
                //Some task…  
            }*/
        }

        private void pariSideBar1_Load(object sender, EventArgs e)
        {

        }
    }
}
