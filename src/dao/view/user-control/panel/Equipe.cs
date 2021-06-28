using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control.panel
{
    public partial class Equipe : UserControl
    {
        private PariTitle pariTitle;
        private PariTextBox nomEquipe;
        private PariTextBox logo;
        private PariTextBox formation1;
        private PariTitle description;
        private System.Windows.Forms.RichTextBox richTextBox;
        private PariLabelError pariLabelError;
        private System.Windows.Forms.Button ajouter;
        private System.Windows.Forms.OpenFileDialog openFileDialog;
        private PariTextBox formation2;
        private System.Windows.Forms.Button importer;

        public Equipe()
        {
            InitializeComponent();
            pariTitle1.Label.Text = "Ajouter équipe";
            pariTextBox1.Label.Text = "Nom de l'équipe";
            pariTextBox1.TextBox.PlaceholderText = "Nom de l'équipe";
            pariTextBox1.LabelError.Text = "";
            pariTextBox2.Label.Text = "Logo de l'équipe";
            pariTextBox2.TextBox.PlaceholderText = "Logo de l'équipe";
            pariTextBox2.LabelError.Text = "";
            pariTextBox3.Label.Text = "Formations (Suivez le format xxxxx)";
            pariTextBox3.TextBox.PlaceholderText = "xxxxx";
            pariTextBox3.LabelError.Text = "";
            pariTextBox4.Label.Text = "Formations (Suivez le format xxxxx)";
            pariTextBox4.TextBox.PlaceholderText = "xxxxx";
            pariTextBox4.LabelError.Text = "";
            pariTitle2.Label.Text = "Description";
            pariLabelError1.Label.Text = "";
            richTextBox1.Text = "Le PSG, un jeune club\nLe Paris Saint-Germain Football Club a été fondé en 1970 suite à la fusion du Paris FC et du Stade\nSaint-Germain. Le PSG évolue à domicile au Parc des Princes, un stade d'une capacité de 47 929 places.\nDes travaux sont à l'étude afin de permettre de supporter les forts affluences récurrentes depuis\nquelques années.";
        }

        public PariTitle PariTitle { get => pariTitle1; set { pariTitle1 = value; pariTitle = value; } }
        public PariTextBox NomEquipe { get => pariTextBox1; set { pariTextBox1 = value; nomEquipe = value; } }
        public PariTextBox Logo { get => pariTextBox2; set { pariTextBox2 = value; logo = value; } }
        public PariTextBox Formation1 { get => pariTextBox3; set { pariTextBox3 = value; formation1 = value; } }
        public PariTitle Description { get => pariTitle2; set { pariTitle2 = value; description = value; } }
        public RichTextBox RichTextBox { get => richTextBox1; set { richTextBox1 = value; richTextBox = value; } }
        public PariLabelError PariLabelError { get => pariLabelError1; set { pariLabelError1 = value; pariLabelError = value; } }
        public Button Ajouter { get => button1; set { button1 = value; ajouter = value; } }
        public OpenFileDialog OpenFileDialog { get => openFileDialog1; set { openFileDialog1 = value; openFileDialog = value; } }
        public PariTextBox Formation2 { get => pariTextBox4; set { pariTextBox4 = value; formation2 = value; } }
        public Button Importer { get => button2; set { button2 = value; importer = value; } }

        private void pariTitle2_Load(object sender, EventArgs e)
        {

        }
    }
}
