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
