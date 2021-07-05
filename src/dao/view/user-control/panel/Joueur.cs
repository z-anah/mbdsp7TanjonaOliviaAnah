using Newtonsoft.Json;
using pari.src.dao.service;
using pari.src.dao.utilities;
using RestSharp;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Text;
using System.Threading.Tasks;
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
            temp();
        }

        private async void temp()
        {
            Cursor = Cursors.WaitCursor;
            var res = await Service.getEquipes();
            var fpc = new List<Combo>();
            foreach (EquipeModel f in res.Data) fpc.Add(new Combo { Text = f.Nomequipe, Value = f.Id });
            pariComboItem1.ComboBox.DisplayMember = "Text";
            pariComboItem1.ComboBox.ValueMember = "Value";
            pariComboItem1.ComboBox.DataSource = fpc;

            var fpc1 = new List<Combo>();
            for (int i = 1; i <= 12; i++) fpc1.Add(new Combo { Text = i.ToString(), Value = i.ToString() });
            pariComboItem2.ComboBox.DisplayMember = "Text";
            pariComboItem2.ComboBox.ValueMember = "Value";
            pariComboItem2.ComboBox.DataSource = fpc1;
            Cursor = Cursors.Arrow;
        }

        private void InitializeComponent()
        {
            this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
            this.pariTitle1 = new pari.src.dao.view.user_control.PariTitle();
            this.pariTextBox1 = new pari.src.dao.view.user_control.PariTextBox();
            this.pariTextBox2 = new pari.src.dao.view.user_control.PariTextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.pariComboItem1 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariComboItem2 = new pari.src.dao.view.user_control.PariComboItem();
            this.panel2 = new System.Windows.Forms.Panel();
            this.pariDate1 = new pari.src.dao.view.user_control.PariDate();
            this.pariTextBox3 = new pari.src.dao.view.user_control.PariTextBox();
            this.panel1 = new System.Windows.Forms.Panel();
            this.pariTextBox4 = new pari.src.dao.view.user_control.PariTextBox();
            this.panel3 = new System.Windows.Forms.Panel();
            this.button2 = new System.Windows.Forms.Button();
            this.pariTextBox5 = new pari.src.dao.view.user_control.PariTextBox();
            this.button4 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.flowLayoutPanel1.SuspendLayout();
            this.panel2.SuspendLayout();
            this.panel1.SuspendLayout();
            this.panel3.SuspendLayout();
            this.SuspendLayout();
            // 
            // flowLayoutPanel1
            // 
            this.flowLayoutPanel1.Controls.Add(this.pariTitle1);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox1);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox2);
            this.flowLayoutPanel1.Controls.Add(this.button1);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem1);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem2);
            this.flowLayoutPanel1.Controls.Add(this.panel2);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox3);
            this.flowLayoutPanel1.Controls.Add(this.panel1);
            this.flowLayoutPanel1.Controls.Add(this.panel3);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox5);
            this.flowLayoutPanel1.Controls.Add(this.button4);
            this.flowLayoutPanel1.Controls.Add(this.button3);
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
            this.pariTitle1.Size = new System.Drawing.Size(431, 23);
            this.pariTitle1.TabIndex = 0;
            // 
            // pariTextBox1
            // 
            this.pariTextBox1.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox1.Location = new System.Drawing.Point(3, 32);
            this.pariTextBox1.Name = "pariTextBox1";
            this.pariTextBox1.Size = new System.Drawing.Size(264, 74);
            this.pariTextBox1.TabIndex = 1;
            // 
            // pariTextBox2
            // 
            this.pariTextBox2.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox2.Location = new System.Drawing.Point(273, 32);
            this.pariTextBox2.Name = "pariTextBox2";
            this.pariTextBox2.Size = new System.Drawing.Size(263, 74);
            this.pariTextBox2.TabIndex = 2;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(542, 32);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 3;
            this.button1.Text = "Importer";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.Button1_ClickAsync);
            // 
            // pariComboItem1
            // 
            this.pariComboItem1.Location = new System.Drawing.Point(3, 112);
            this.pariComboItem1.Name = "pariComboItem1";
            this.pariComboItem1.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem1.TabIndex = 4;
            // 
            // pariComboItem2
            // 
            this.pariComboItem2.Location = new System.Drawing.Point(309, 112);
            this.pariComboItem2.Name = "pariComboItem2";
            this.pariComboItem2.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem2.TabIndex = 5;
            // 
            // panel2
            // 
            this.panel2.Controls.Add(this.pariDate1);
            this.panel2.Location = new System.Drawing.Point(3, 188);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(306, 103);
            this.panel2.TabIndex = 11;
            // 
            // pariDate1
            // 
            this.pariDate1.Location = new System.Drawing.Point(3, 3);
            this.pariDate1.Name = "pariDate1";
            this.pariDate1.Size = new System.Drawing.Size(218, 113);
            this.pariDate1.TabIndex = 6;
            // 
            // pariTextBox3
            // 
            this.pariTextBox3.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox3.Location = new System.Drawing.Point(315, 188);
            this.pariTextBox3.Name = "pariTextBox3";
            this.pariTextBox3.Size = new System.Drawing.Size(265, 74);
            this.pariTextBox3.TabIndex = 7;
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.pariTextBox4);
            this.panel1.Location = new System.Drawing.Point(3, 297);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(584, 80);
            this.panel1.TabIndex = 10;
            // 
            // pariTextBox4
            // 
            this.pariTextBox4.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox4.Location = new System.Drawing.Point(3, 3);
            this.pariTextBox4.Name = "pariTextBox4";
            this.pariTextBox4.Size = new System.Drawing.Size(264, 74);
            this.pariTextBox4.TabIndex = 8;
            this.pariTextBox4.Load += new System.EventHandler(this.pariTextBox4_Load);
            // 
            // panel3
            // 
            this.panel3.Controls.Add(this.button2);
            this.panel3.Location = new System.Drawing.Point(3, 383);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(384, 34);
            this.panel3.TabIndex = 14;
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(3, 3);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 23);
            this.button2.TabIndex = 9;
            this.button2.Text = "Ajouter";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // pariTextBox5
            // 
            this.pariTextBox5.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox5.Location = new System.Drawing.Point(3, 423);
            this.pariTextBox5.Name = "pariTextBox5";
            this.pariTextBox5.Size = new System.Drawing.Size(263, 74);
            this.pariTextBox5.TabIndex = 12;
            // 
            // button4
            // 
            this.button4.Location = new System.Drawing.Point(272, 423);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(75, 23);
            this.button4.TabIndex = 15;
            this.button4.Text = "button4";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.button4_Click);
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(353, 423);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(75, 23);
            this.button3.TabIndex = 13;
            this.button3.Text = "Importer";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // Joueur
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.flowLayoutPanel1);
            this.Name = "Joueur";
            this.Size = new System.Drawing.Size(634, 513);
            this.flowLayoutPanel1.ResumeLayout(false);
            this.panel2.ResumeLayout(false);
            this.panel1.ResumeLayout(false);
            this.panel3.ResumeLayout(false);
            this.ResumeLayout(false);

            init();
        }

        private void init()
        {

            this.pariTitle1.Label.Text = "Ajouter un joueur";
            this.pariTextBox1.Label.Text = "Nom complet";
            this.pariTextBox1.TextBox.PlaceholderText = "Nom complet";
            this.pariTextBox1.LabelError.Text = "";
            this.pariTextBox2.Label.Text = "Photo de profil";
            this.pariTextBox2.TextBox.PlaceholderText = "*.jpg;*.jpeg;*.png;";
            this.pariTextBox2.LabelError.Text = "";
            this.pariComboItem1.PariTitle.Label.Text = "Équipe";
            this.pariComboItem1.ComboBox.Text = "Équipes";
            this.pariComboItem2.PariTitle.Label.Text = "Poste";
            this.pariComboItem2.ComboBox.Text = "Postes";
            this.pariDate1.PariTitle.Label.Text = "Date de naissance";
            this.pariDate1.PariLabelError.Label.Text = "";
            this.pariTextBox3.Label.Text = "Taille (m)";
            this.pariTextBox3.TextBox.PlaceholderText = "en m";
            this.pariTextBox3.LabelError.Text = "";
            this.pariTextBox4.Label.Text = "Poids (kg)";
            this.pariTextBox4.TextBox.PlaceholderText = "en kg";
            this.pariTextBox4.LabelError.Text = "";
            pariDate1.DateTimePicker.Format = DateTimePickerFormat.Custom;
            pariDate1.DateTimePicker.CustomFormat = "yyyy-MM-dd";

            pariTextBox5.Label.Text = "Importer un fichier";
            pariTextBox5.TextBox.PlaceholderText = "*.json; *.csv; *.excel";
            pariTextBox5.LabelError.Text = "";
            button3.Text = "Importer";
            button4.Text = "Choisir";
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

        private void Button1_ClickAsync(object sender, EventArgs e)
        {
            OpenFileDialog dialog = new OpenFileDialog();
            dialog.Filter = "Image Files|*.jpg;*.jpeg;*.png;...";
            dialog.Multiselect = false;
            if (dialog.ShowDialog() == DialogResult.OK) pariTextBox2.TextBox.Text = dialog.FileName;
        }

        private async void button2_Click(object sender, EventArgs e)
        {
            Cursor = Cursors.WaitCursor;
            var c = (Combo)pariComboItem1.ComboBox.SelectedItem;
            var c2 = (Combo)pariComboItem2.ComboBox.SelectedItem;
            int idposte = int.Parse(c2.Value);
            var idequipe = c.Value;
            var nomjoueur = pariTextBox1.TextBox.Text;
            var profiljoueur = Service.upload(pariTextBox2.TextBox.Text);
            var agejoueur = pariDate1.DateTimePicker.Value.ToString();
            var taillejoueur = pariTextBox3.TextBox.Text;
            var poidsjoueur = pariTextBox4.TextBox.Text;

            Task<JoueurRest> da = Service.createJoueur(
                idposte, idequipe, nomjoueur, profiljoueur, agejoueur, taillejoueur, poidsjoueur
                );
            JoueurRest d = await da;
            Cursor = Cursors.Arrow;
            if (d.Status) Information.information(this, $"{nomjoueur} est ajouté avec succès");
            else Information.informationError(this, d.Message);
        }

        private void pariTextBox4_Load(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            Cursor = Cursors.WaitCursor;
            var csv = Service.UploadCsv(pariTextBox5.TextBox.Text);
            Cursor = Cursors.Arrow;

            if (csv.IsSuccessful)
            {
                var js = JsonConvert.DeserializeObject<JoueurCreateCsvRest>(csv.Content);
                var md = "";
                foreach (var j in js.Data.Joueurs)
                {
                    md += $"{j.Nomjoueur} - ";
                }
                Information.information(this, $"{md} sont ajoutés avec succès");
            }
            else
            {
                var err = JsonConvert.DeserializeObject<ErrorRestModel>(csv.Content);
                Information.informationError(this, err.Message);
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            OpenFileDialog dialog = new OpenFileDialog();
            dialog.Filter = "Csv Files|*.csv;...";
            dialog.Multiselect = false;
            if (dialog.ShowDialog() == DialogResult.OK) pariTextBox5.TextBox.Text = dialog.FileName;
        }
    }
}
