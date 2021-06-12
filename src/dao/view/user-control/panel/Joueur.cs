using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control.panel
{
    public partial class Joueur : UserControl
    {
        private PariTitle pariTitle;
        private PariTextBox nomComplet;
        private PariTextBox profil;
        private System.Windows.Forms.Button button;
        private PariComboItem equipes;
        private PariComboItem postes;
        private PariDate pariDate;
        private PariTextBox taille;
        private PariTextBox poids;

        public Joueur()
        {
            InitializeComponent();
        }

        public PariTitle PariTitle { get => pariTitle1; set { pariTitle1 = value; pariTitle = value; } }
        public PariTextBox NomComplet { get => pariTextBox1; set { pariTextBox1 = value; nomComplet = value; } }
        public PariTextBox Profil { get => pariTextBox2; set { pariTextBox2 = value; profil = value; } }
        public Button Button { get => button1; set { button1 = value; button = value; } }
        public PariComboItem Equipes { get => pariComboItem1; set { pariComboItem1 = value; equipes = value; } }
        public PariComboItem Postes { get => pariComboItem2; set { pariComboItem2 = value; postes = value; } }
        public PariDate PariDate { get => pariDate1; set { pariDate1 = value; pariDate = value; } }
        public PariTextBox Taille { get => pariTextBox3; set { pariTextBox3 = value; taille = value; } }
        public PariTextBox Poids { get => pariTextBox4; set { pariTextBox4 = value; poids = value; } }
    }
}
