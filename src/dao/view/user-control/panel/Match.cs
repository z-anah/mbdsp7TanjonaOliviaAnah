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
        private PariTextBox pariTextBox;
        private System.Windows.Forms.Button importer;
        private PariComboItem compet;
        private PariComboItem eq1;
        private PariComboItem eq2;
        private PariComboItem formationEq1;
        private PariComboItem formationEq2;
        private System.Windows.Forms.Button ajouter;
        private PariComboItem arbitre;
        private PariDate pariDate;

        public Match()
        {
            InitializeComponent();
        }


        private void InitializeComponent()
        {
            this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
            this.pariTitle1 = new pari.src.dao.view.user_control.PariTitle();
            this.pariTextBox1 = new pari.src.dao.view.user_control.PariTextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.pariComboItem1 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariComboItem2 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariComboItem3 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariComboItem4 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariComboItem6 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariComboItem5 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariDate1 = new pari.src.dao.view.user_control.PariDate();
            this.button2 = new System.Windows.Forms.Button();
            this.flowLayoutPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // flowLayoutPanel1
            // 
            this.flowLayoutPanel1.Controls.Add(this.pariTitle1);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox1);
            this.flowLayoutPanel1.Controls.Add(this.button1);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem1);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem6);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem2);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem3);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem4);
            this.flowLayoutPanel1.Controls.Add(this.pariComboItem5);
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
            this.pariTitle1.Size = new System.Drawing.Size(200, 23);
            this.pariTitle1.TabIndex = 0;
            // 
            // pariTextBox1
            // 
            this.pariTextBox1.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox1.Location = new System.Drawing.Point(209, 3);
            this.pariTextBox1.Name = "pariTextBox1";
            this.pariTextBox1.Size = new System.Drawing.Size(276, 74);
            this.pariTextBox1.TabIndex = 1;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(491, 3);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 2;
            this.button1.Text = "Importer";
            this.button1.UseVisualStyleBackColor = true;
            // 
            // pariComboItem1
            // 
            this.pariComboItem1.Location = new System.Drawing.Point(3, 83);
            this.pariComboItem1.Name = "pariComboItem1";
            this.pariComboItem1.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem1.TabIndex = 3;
            // 
            // pariComboItem2
            // 
            this.pariComboItem2.Location = new System.Drawing.Point(3, 159);
            this.pariComboItem2.Name = "pariComboItem2";
            this.pariComboItem2.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem2.TabIndex = 4;
            // 
            // pariComboItem3
            // 
            this.pariComboItem3.Location = new System.Drawing.Point(309, 159);
            this.pariComboItem3.Name = "pariComboItem3";
            this.pariComboItem3.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem3.TabIndex = 5;
            // 
            // pariComboItem4
            // 
            this.pariComboItem4.Location = new System.Drawing.Point(3, 235);
            this.pariComboItem4.Name = "pariComboItem4";
            this.pariComboItem4.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem4.TabIndex = 6;
            // 
            // pariComboItem6
            // 
            this.pariComboItem6.Location = new System.Drawing.Point(309, 83);
            this.pariComboItem6.Name = "pariComboItem6";
            this.pariComboItem6.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem6.TabIndex = 8;
            // 
            // pariComboItem5
            // 
            this.pariComboItem5.Location = new System.Drawing.Point(309, 235);
            this.pariComboItem5.Name = "pariComboItem5";
            this.pariComboItem5.Size = new System.Drawing.Size(300, 70);
            this.pariComboItem5.TabIndex = 7;
            // 
            // pariDate1
            // 
            this.pariDate1.Location = new System.Drawing.Point(3, 311);
            this.pariDate1.Name = "pariDate1";
            this.pariDate1.Size = new System.Drawing.Size(563, 113);
            this.pariDate1.TabIndex = 9;
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(3, 430);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 23);
            this.button2.TabIndex = 10;
            this.button2.Text = "Ajouter";
            this.button2.UseVisualStyleBackColor = true;
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

            pariTitle1.Label.Text = "Ajouter un match";
            pariTextBox1.Label.Text = "Importer un fichier";
            pariTextBox1.TextBox.PlaceholderText = "*.json; *.csv; *.excel";
            pariTextBox1.LabelError.Text = "";
            button1.Text = "Importer";
            pariComboItem1.PariTitle.Label.Text = "Événements";
            pariComboItem1.ComboBox.Text = "Événements";
            pariComboItem2.PariTitle.Label.Text = "Équipe 1";
            pariComboItem2.ComboBox.Text = "Équipe 1";
            pariComboItem3.PariTitle.Label.Text = "Équipe 2";
            pariComboItem3.ComboBox.Text = "Équipe 2";
            pariComboItem4.PariTitle.Label.Text = "Formation équipe 1";
            pariComboItem4.ComboBox.Text = "Formations";
            pariComboItem5.PariTitle.Label.Text = "Formation équipe 2";
            pariComboItem5.ComboBox.Text = "Formations";
            pariComboItem6.PariTitle.Label.Text = "Arbitre";
            pariComboItem6.ComboBox.Text = "Arbitres";
            pariDate1.PariTitle.Label.Text = "Date et heure";
            pariDate1.PariLabelError.Label.Text = "";
            button2.Text = "Ajouter";
        }

        public PariTitle PariTitle { get => pariTitle1; set { pariTitle1 = value; pariTitle = value; } }
        public PariTextBox PariTextBox { get => pariTextBox1; set { pariTextBox1 = value; pariTextBox = value; } }
        public Button Importer { get => button1; set { button1 = value; importer = value; } }
        public PariComboItem Compet { get => pariComboItem1; set { pariComboItem1 = value; compet = value; } }
        public PariComboItem Eq1 { get => pariComboItem2; set { pariComboItem2 = value; eq1 = value; } }
        public PariComboItem Eq2 { get => pariComboItem3; set { pariComboItem3 = value; eq2 = value; } }
        public PariComboItem FormationEq1 { get => pariComboItem4; set { pariComboItem4 = value; formationEq1 = value; } }
        public PariComboItem FormationEq2 { get => pariComboItem5; set { pariComboItem5 = value; formationEq2 = value; } }
        public Button Ajouter { get => button2; set { button2 = value; ajouter = value; } }
        public PariComboItem Arbitre { get => pariComboItem6; set { pariComboItem6 = value; arbitre = value; } }
        public PariDate PariDate { get => pariDate1; set { pariDate1 = value; pariDate = value; } }

    }
}
