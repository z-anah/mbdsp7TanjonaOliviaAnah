using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Net;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control.panel
{
    public partial class PariSideBar : UserControl
    {

        private System.Windows.Forms.PictureBox pictureBox;
        private System.Windows.Forms.Label nomComplet;
        private System.Windows.Forms.Label email;
        private System.Windows.Forms.Button competition;
        private System.Windows.Forms.Button equipe;
        private System.Windows.Forms.Button joueur;
        private System.Windows.Forms.Button match;
        private System.Windows.Forms.VScrollBar vScrollBar;
        private System.Windows.Forms.Button deconnecter;

        public PariSideBar()
        {
            InitializeComponent();
            initializeComponent();
            displayUser();
            displayMatchs();
        }

        private void initializeComponent()
        {
            button1.Text = "Compétitions";
            button2.Text = "Équipes";
            button3.Text = "Joueurs";
            button4.Text = "Matchs";
            label3.Text = "Les matchs à venir";
            button5.Text = "Se déconnecter";
        }

        // TODO
        private void displayMatchs() { }
        private void displayUser()
        {
            var request = WebRequest.Create("https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/129297069_3761278353930804_4402278375392454087_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=5b7eaf&_nc_eui2=AeHwDfwuubTHcJTC-GOB_K3UapqQ_8r7s5dqmpD_yvuzlzuqpoCA7CQZO6ZGqwQ0FyY2-EsJ7FVH0qZDxFgR7IrO&_nc_ohc=bNwrP7YpjQEAX92i7Mo&_nc_ht=scontent-jnb1-1.xx&oh=784f7933c908c27e16a451aeff4663de&oe=60D0176D");
            var nomComplet = "Mike";
            var email = "mike@gmail.com";

            label1.Text = nomComplet;
            label2.Text = email;

            using (var response = request.GetResponse())
            using (var stream = response.GetResponseStream())
            {
                pictureBox1.Image = Bitmap.FromStream(stream);
                pictureBox1.SizeMode = PictureBoxSizeMode.Zoom;
            }
        }

        public PictureBox PictureBox { get => pictureBox1; set { pictureBox1 = value; pictureBox = value; } }
        public Label NomComplet { get => label1; set { label1 = value; nomComplet = value; } }
        public Label Email { get => label2; set { label2 = value; email = value; } }
        public Button Competition { get => button1; set { button1 = value; competition = value; } }
        public Button Equipe { get => button2; set { button2 = value; equipe = value; } }
        public Button Joueur { get => button3; set { button3 = value; joueur = value; } }
        public Button Match { get => button4; set { button4 = value; match = value; } }
        public VScrollBar VScrollBar { get => vScrollBar1; set { vScrollBar1 = value; vScrollBar = value; } }
        public Button Deconnecter { get => button5; set { button5 = value; deconnecter = value; } }

        private void flowLayoutPanel2_Paint(object sender, PaintEventArgs e)
        {

        }
    }
}
