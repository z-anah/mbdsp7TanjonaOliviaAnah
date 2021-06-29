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
            this.pariDate1 = new pari.src.dao.view.user_control.PariDate();
            this.pariTextBox3 = new pari.src.dao.view.user_control.PariTextBox();
            this.pariTextBox4 = new pari.src.dao.view.user_control.PariTextBox();
            this.button2 = new System.Windows.Forms.Button();
            this.flowLayoutPanel1.SuspendLayout();
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
            this.flowLayoutPanel1.Controls.Add(this.pariDate1);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox3);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox4);
            this.flowLayoutPanel1.Controls.Add(this.button2);
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
            this.pariTitle1.Label.Text = "Ajouter un joueur";
            // 
            // pariTextBox1
            // 
            this.pariTextBox1.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox1.Location = new System.Drawing.Point(3, 32);
            this.pariTextBox1.Name = "pariTextBox1";
            this.pariTextBox1.Size = new System.Drawing.Size(264, 74);
            this.pariTextBox1.TabIndex = 1;
            this.pariTextBox1.Label.Text = "Nom complet";
            this.pariTextBox1.TextBox.PlaceholderText = "Nom complet";
            this.pariTextBox1.LabelError.Text = "";
            // 
            // pariTextBox2
            // 
            this.pariTextBox2.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox2.Location = new System.Drawing.Point(273, 32);
            this.pariTextBox2.Name = "pariTextBox2";
            this.pariTextBox2.Size = new System.Drawing.Size(263, 74);
            this.pariTextBox2.TabIndex = 2;
            this.pariTextBox2.Label.Text = "Photo de profil";
            this.pariTextBox2.TextBox.PlaceholderText = "*.jpg;*.jpeg;*.png;";
            this.pariTextBox2.LabelError.Text = "";
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
            this.pariComboItem1.PariTitle.Label.Text = "Équipe";
            this.pariComboItem1.ComboBox.Text = "Équipes";

            //Équipe
            // 
            // pariComboItem2
            // 
            this.pariComboItem2.Location = new System.Drawing.Point(309, 112);
            this.pariComboItem2.Name = "pariComboItem2";
            this.pariComboItem2.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem2.TabIndex = 5;
            this.pariComboItem2.PariTitle.Label.Text = "Poste";
            this.pariComboItem2.ComboBox.Text = "Postes";
            // 
            // pariDate1
            // 
            this.pariDate1.Location = new System.Drawing.Point(3, 188);
            this.pariDate1.Name = "pariDate1";
            this.pariDate1.Size = new System.Drawing.Size(218, 113);
            this.pariDate1.TabIndex = 6;
            this.pariDate1.PariTitle.Label.Text = "Date de naissance";
            this.pariDate1.PariLabelError.Label.Text = "";
            // 
            // pariTextBox3
            // 
            this.pariTextBox3.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox3.Location = new System.Drawing.Point(227, 188);
            this.pariTextBox3.Name = "pariTextBox3";
            this.pariTextBox3.Size = new System.Drawing.Size(265, 74);
            this.pariTextBox3.TabIndex = 7;
            this.pariTextBox3.Label.Text = "Taille (m)";
            this.pariTextBox3.TextBox.PlaceholderText = "en m";
            this.pariTextBox3.LabelError.Text = "";
            // 
            // pariTextBox4
            // 
            this.pariTextBox4.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox4.Location = new System.Drawing.Point(3, 307);
            this.pariTextBox4.Name = "pariTextBox4";
            this.pariTextBox4.Size = new System.Drawing.Size(264, 74);
            this.pariTextBox4.TabIndex = 8;
            this.pariTextBox4.Label.Text = "Poids (kg)";
            this.pariTextBox4.TextBox.PlaceholderText = "en kg";
            this.pariTextBox4.LabelError.Text = "";
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(273, 307);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 23);
            this.button2.TabIndex = 9;
            this.button2.Text = "Ajouter";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // Joueur
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.flowLayoutPanel1);
            this.Name = "Joueur";
            this.Size = new System.Drawing.Size(634, 513);
            this.flowLayoutPanel1.ResumeLayout(false);
            this.ResumeLayout(false);

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

        private void button2_Click(object sender, EventArgs e)
        {
            //var idposte = pariComboItem1.ComboBox.SelectedItem.ToString();
            //var idequipe = pariComboItem2.ComboBox.SelectedItem.ToString();
            var nomjoueur = pariTextBox1.TextBox.Text;
            var profiljoueur = pariTextBox2.TextBox.Text;
            var agejoueur = pariDate1.DateTimePicker.Value.ToString();
            var taillejoueur = pariTextBox3.TextBox.Text;
            var poindsjoueur = pariTextBox4.TextBox.Text;



            /*var client = new RestClient("http://localhost:5000/api");
            var request = new RestRequest("upload", Method.POST);

            request.AddFile("profil", pariTextBox2.TextBox.Text, "image/png");
            request.AlwaysMultipartFormData = true;

            IRestResponse response = client.Execute(request);
            if (response.IsSuccessful)
            {
                Console.WriteLine($"Success: {response.Content}");
            }
            else
            {
                if (response.StatusCode == 0)
                {
                    Console.WriteLine($"Failed: network error: {response.ErrorMessage}");
                }
                else
                {
                    Console.WriteLine($"Failed: {(int)response.StatusCode}-{response.StatusDescription}");
                }
            }*/
        }
    }

    internal class UploadRest
    {
        public bool Status { get; internal set; }
        public string Message { get; internal set; }
    }
}
