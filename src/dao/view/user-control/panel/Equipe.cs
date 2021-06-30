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
        private PariTitle description;
        private System.Windows.Forms.RichTextBox richTextBox;
        private PariLabelError pariLabelError;
        private System.Windows.Forms.Button ajouter;
        private System.Windows.Forms.OpenFileDialog openFileDialog;
        private System.Windows.Forms.Button importer;
        private PariComboItem pariComboItem;

        public Equipe()
        {
            InitializeComponent();
        }


        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Equipe));
            this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
            this.pariTitle1 = new pari.src.dao.view.user_control.PariTitle();
            this.pariTextBox1 = new pari.src.dao.view.user_control.PariTextBox();
            this.pariTextBox2 = new pari.src.dao.view.user_control.PariTextBox();
            this.button2 = new System.Windows.Forms.Button();
            this.pariComboItem1 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariTitle2 = new pari.src.dao.view.user_control.PariTitle();
            this.richTextBox1 = new System.Windows.Forms.RichTextBox();
            this.pariLabelError1 = new pari.src.dao.view.user_control.PariLabelError();
            this.button1 = new System.Windows.Forms.Button();
            this.openFileDialog1 = new System.Windows.Forms.OpenFileDialog();
            this.pariTextBox3 = new pari.src.dao.view.user_control.PariTextBox();
            this.flowLayoutPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // flowLayoutPanel1
            // 
            this.flowLayoutPanel1.Controls.Add(this.pariTitle1);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox1);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox2);
            this.flowLayoutPanel1.Controls.Add(this.button2);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem1);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox3);
            this.flowLayoutPanel1.Controls.Add(this.pariTitle2);
            this.flowLayoutPanel1.Controls.Add(this.richTextBox1);
            this.flowLayoutPanel1.Controls.Add(this.pariLabelError1);
            this.flowLayoutPanel1.Controls.Add(this.button1);
            this.flowLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.flowLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.flowLayoutPanel1.Name = "flowLayoutPanel1";
            this.flowLayoutPanel1.Size = new System.Drawing.Size(634, 513);
            this.flowLayoutPanel1.TabIndex = 0;
            // 
            // pariTitle1
            // 
            this.pariTitle1.Location = new System.Drawing.Point(3, 3);
            this.pariTitle1.Name = "pariTitle1";
            this.pariTitle1.Size = new System.Drawing.Size(424, 23);
            this.pariTitle1.TabIndex = 0;
            // 
            // pariTextBox1
            // 
            this.pariTextBox1.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox1.Location = new System.Drawing.Point(3, 32);
            this.pariTextBox1.Name = "pariTextBox1";
            this.pariTextBox1.Size = new System.Drawing.Size(262, 74);
            this.pariTextBox1.TabIndex = 1;
            // 
            // pariTextBox2
            // 
            this.pariTextBox2.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox2.Location = new System.Drawing.Point(271, 32);
            this.pariTextBox2.Name = "pariTextBox2";
            this.pariTextBox2.Size = new System.Drawing.Size(263, 74);
            this.pariTextBox2.TabIndex = 2;
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(540, 32);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 23);
            this.button2.TabIndex = 9;
            this.button2.Text = "Importer";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // pariComboItem1
            // 
            this.pariComboItem1.Location = new System.Drawing.Point(3, 112);
            this.pariComboItem1.Name = "pariComboItem1";
            this.pariComboItem1.Size = new System.Drawing.Size(262, 70);
            this.pariComboItem1.TabIndex = 10;
            // 
            // pariTitle2
            // 
            this.pariTitle2.Location = new System.Drawing.Point(3, 192);
            this.pariTitle2.Name = "pariTitle2";
            this.pariTitle2.Size = new System.Drawing.Size(407, 23);
            this.pariTitle2.TabIndex = 4;
            this.pariTitle2.Load += new System.EventHandler(this.pariTitle2_Load);
            // 
            // richTextBox1
            // 
            this.richTextBox1.Location = new System.Drawing.Point(3, 221);
            this.richTextBox1.Name = "richTextBox1";
            this.richTextBox1.Size = new System.Drawing.Size(628, 109);
            this.richTextBox1.TabIndex = 5;
            this.richTextBox1.Text = resources.GetString("richTextBox1.Text");
            // 
            // pariLabelError1
            // 
            this.pariLabelError1.Location = new System.Drawing.Point(3, 336);
            this.pariLabelError1.Name = "pariLabelError1";
            this.pariLabelError1.Size = new System.Drawing.Size(567, 25);
            this.pariLabelError1.TabIndex = 6;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(3, 367);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 7;
            this.button1.Text = "Ajouter";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // openFileDialog1
            // 
            this.openFileDialog1.FileName = "openFileDialog1";
            // 
            // pariTextBox3
            // 
            this.pariTextBox3.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox3.Location = new System.Drawing.Point(271, 112);
            this.pariTextBox3.Name = "pariTextBox3";
            this.pariTextBox3.Size = new System.Drawing.Size(263, 74);
            this.pariTextBox3.TabIndex = 11;
            // 
            // Equipe
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.flowLayoutPanel1);
            this.Name = "Equipe";
            this.Size = new System.Drawing.Size(634, 513);
            this.flowLayoutPanel1.ResumeLayout(false);
            this.ResumeLayout(false);

            pariTitle1.Label.Text = "Ajouter équipe";
            pariTextBox1.Label.Text = "Nom de l'équipe";
            pariTextBox1.TextBox.PlaceholderText = "Nom de l'équipe";
            pariTextBox1.LabelError.Text = "";
            pariTextBox2.Label.Text = "Logo de l'équipe";
            pariTextBox2.TextBox.PlaceholderText = "Logo de l'équipe";
            pariTextBox2.LabelError.Text = "";
            pariTitle2.Label.Text = "Description";
            pariLabelError1.Label.Text = "";
            richTextBox1.Text = "Le PSG, un jeune club\nLe Paris Saint-Germain Football Club a été fondé en 1970 suite à la fusion du Paris FC et du Stade\nSaint-Germain. Le PSG évolue à domicile au Parc des Princes, un stade d'une capacité de 47 929 places.\nDes travaux sont à l'étude afin de permettre de supporter les forts affluences récurrentes depuis\nquelques années.";
            pariComboItem1.PariTitle.Label.Text = "Formations (Suivez le format xxxxx)";
            pariComboItem1.ComboBox.Text = "xxxxx";
            pariTextBox3.Label.Text = "Coach";
            pariTextBox3.TextBox.PlaceholderText = "Nom du Coach";
            pariTextBox3.LabelError.Text = "";
        }

        public PariTitle PariTitle { get => pariTitle1; set { pariTitle1 = value; pariTitle = value; } }
        public PariTextBox NomEquipe { get => pariTextBox1; set { pariTextBox1 = value; nomEquipe = value; } }
        public PariTextBox Logo { get => pariTextBox2; set { pariTextBox2 = value; logo = value; } }
        public PariTitle Description { get => pariTitle2; set { pariTitle2 = value; description = value; } }
        public RichTextBox RichTextBox { get => richTextBox1; set { richTextBox1 = value; richTextBox = value; } }
        public PariLabelError PariLabelError { get => pariLabelError1; set { pariLabelError1 = value; pariLabelError = value; } }
        public Button Ajouter { get => button1; set { button1 = value; ajouter = value; } }
        public OpenFileDialog OpenFileDialog { get => openFileDialog1; set { openFileDialog1 = value; openFileDialog = value; } }
        public Button Importer { get => button2; set { button2 = value; importer = value; } }
        public PariComboItem PariComboItem { get => pariComboItem1; set { pariComboItem = value; pariComboItem1 = value; } }
        public PariTextBox NomCoach { get => pariTextBox3; set { pariTextBox3 = value; NomCoach = value; } }

        private void pariTitle2_Load(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            OpenFileDialog dialog = new OpenFileDialog();
            dialog.Filter = "Image Files|*.jpg;*.jpeg;*.png;...";
            dialog.Multiselect = false;
            if (dialog.ShowDialog() == DialogResult.OK) pariTextBox2.TextBox.Text = dialog.FileName;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //var idformation = Number;
            var nomequipe = pariTextBox1.Label.Text;
            var logoequipe = pariTextBox2.LabelError.Text;
            //var nomcoachequipe = String;
            //var Descriptionequipe = String;
        }
    }
}
