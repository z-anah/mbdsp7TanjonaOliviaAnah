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
            MyInitializeComponent();
        }
        private void MyInitializeComponent()
        {
            this.Size = new Size(320, 400);

            this.pariLogin.TextBox.Label.Text = "Email";
            this.pariLogin.TextBox.TextBox.PlaceholderText = "Email";
            this.pariLogin.TextBox.LabelError.Text = "";

            this.pariLogin.MotPasse.Label.Text = "Mot de passe";
            this.pariLogin.MotPasse.TextBox.PlaceholderText = "Mot de passe";
            this.pariLogin.MotPasse.LabelError.Text = "";
            this.pariLogin.MotPasse.TextBox.PasswordChar = '*';

            //this.pariLogin.TextBox

            this.pariLogin.LabelError.Text = "";

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
    }
}
