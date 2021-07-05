using pari.src.dao.service;
using pari.src.dao.utilities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control.panel
{
    public partial class Match : UserControl
    {

        private PariTitle pariTitle;
        private PariComboItem compet;
        private PariComboItem eq1;
        private PariComboItem eq2;
        private System.Windows.Forms.Button ajouter;

        public Match()
        {
            InitializeComponent();
        }


        private void InitializeComponent()
        {
            this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
            this.pariTitle1 = new pari.src.dao.view.user_control.PariTitle();
            this.pariComboItem1 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariComboItem2 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariComboItem3 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariDate1 = new pari.src.dao.view.user_control.PariDate();
            this.button2 = new System.Windows.Forms.Button();
            this.pariTextBox1 = new pari.src.dao.view.user_control.PariTextBox();
            this.flowLayoutPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // flowLayoutPanel1
            // 
            this.flowLayoutPanel1.Controls.Add(this.pariTitle1);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem1);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox1);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem2);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem3);
            this.flowLayoutPanel1.Controls.Add(this.pariDate1);
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
            this.pariTitle1.Size = new System.Drawing.Size(628, 60);
            this.pariTitle1.TabIndex = 0;
            // 
            // pariComboItem1
            // 
            this.pariComboItem1.Location = new System.Drawing.Point(3, 69);
            this.pariComboItem1.Name = "pariComboItem1";
            this.pariComboItem1.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem1.TabIndex = 3;
            // 
            // pariComboItem2
            // 
            this.pariComboItem2.Location = new System.Drawing.Point(3, 149);
            this.pariComboItem2.Name = "pariComboItem2";
            this.pariComboItem2.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem2.TabIndex = 4;
            // 
            // pariComboItem3
            // 
            this.pariComboItem3.Location = new System.Drawing.Point(309, 149);
            this.pariComboItem3.Name = "pariComboItem3";
            this.pariComboItem3.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem3.TabIndex = 5;
            // 
            // pariDate1
            // 
            this.pariDate1.Location = new System.Drawing.Point(3, 225);
            this.pariDate1.Name = "pariDate1";
            this.pariDate1.Size = new System.Drawing.Size(563, 113);
            this.pariDate1.TabIndex = 9;
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(3, 344);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 23);
            this.button2.TabIndex = 10;
            this.button2.Text = "Ajouter";
            this.button2.UseVisualStyleBackColor = true;
            //this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // pariTextBox1
            // 
            this.pariTextBox1.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox1.Location = new System.Drawing.Point(309, 69);
            this.pariTextBox1.Name = "pariTextBox1";
            this.pariTextBox1.Size = new System.Drawing.Size(274, 74);
            this.pariTextBox1.TabIndex = 11;
            // 
            // Match
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.flowLayoutPanel1);
            this.Name = "Match";
            this.Size = new System.Drawing.Size(634, 513);
            this.flowLayoutPanel1.ResumeLayout(false);
            this.ResumeLayout(false);
            init();

        }

        private async void init()
        {

            pariTitle1.Label.Text = "Ajouter un match";
            pariComboItem1.PariTitle.Label.Text = "Événements";
            pariComboItem1.ComboBox.Text = "Événements";
            pariComboItem2.PariTitle.Label.Text = "Équipe 1";
            pariComboItem2.ComboBox.Text = "Équipe 1";
            pariComboItem3.PariTitle.Label.Text = "Équipe 2";
            pariComboItem3.ComboBox.Text = "Équipe 2";
            pariTextBox1.Label.Text = "Arbitre";
            pariTextBox1.TextBox.Text = "Arbitres";
            pariTextBox1.LabelError.Text = "";
            pariDate1.PariTitle.Label.Text = "Date et heure";
            pariDate1.PariLabelError.Label.Text = "";
            button2.Text = "Ajouter";

            pariDate1.DateTimePicker.Format = DateTimePickerFormat.Custom;
            pariDate1.DateTimePicker.CustomFormat = "yyyy-MM-dd";

            Cursor = Cursors.WaitCursor;
            var res = await Service.Evenements();
            var fpc = new List<Combo>();
            foreach (CompetitionModel f in res.Data) fpc.Add(new Combo { Text = f.Nomcompetition, Value = f.Id });
            pariComboItem1.ComboBox.DisplayMember = "Text";
            pariComboItem1.ComboBox.ValueMember = "Value";
            pariComboItem1.ComboBox.DataSource = fpc;
            Cursor = Cursors.Arrow;
        }

        public PariTitle PariTitle { get => pariTitle1; set { pariTitle1 = value; pariTitle = value; } }
        public PariComboItem Compet { get => pariComboItem1; set { pariComboItem1 = value; compet = value; } }
        public PariComboItem Eq1 { get => pariComboItem2; set { pariComboItem2 = value; eq1 = value; } }
        public PariComboItem Eq2 { get => pariComboItem3; set { pariComboItem3 = value; eq2 = value; } }
        public Button Ajouter { get => button2; set { button2 = value; ajouter = value; } }
    }

    //private void button2_Click(object sender, EventArgs e)
    //{
    //Information.information(this, "Fonctionnalité non disponible. Nous vous suggérons la fonctionnalité\n\"Importer fichier\"");

    //}
}

