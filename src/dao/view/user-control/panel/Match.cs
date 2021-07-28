using pari.src.dao.service;
using pari.src.dao.utilities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Threading.Tasks;
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
            init();
        }


        private void InitializeComponent()
        {
            this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
            this.pariTitle1 = new pari.src.dao.view.user_control.PariTitle();
            this.pariComboItem1 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariTextBox1 = new pari.src.dao.view.user_control.PariTextBox();
            this.pariComboItem2 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariComboItem3 = new pari.src.dao.view.user_control.PariComboItem();
            this.pariDate1 = new pari.src.dao.view.user_control.PariDate();
            this.button2 = new System.Windows.Forms.Button();
            this.pariDate2 = new pari.src.dao.view.user_control.PariDate();
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
            this.flowLayoutPanel1.Controls.Add(this.pariDate2);
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
            // pariTextBox1
            // 
            this.pariTextBox1.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox1.Location = new System.Drawing.Point(309, 69);
            this.pariTextBox1.Name = "pariTextBox1";
            this.pariTextBox1.Size = new System.Drawing.Size(274, 74);
            this.pariTextBox1.TabIndex = 11;
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
            this.pariDate1.Size = new System.Drawing.Size(300, 113);
            this.pariDate1.TabIndex = 9;
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(309, 225);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 23);
            this.button2.TabIndex = 10;
            this.button2.Text = "Ajouter";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // pariDate2
            // 
            this.pariDate2.Location = new System.Drawing.Point(3, 344);
            this.pariDate2.Name = "pariDate2";
            this.pariDate2.Size = new System.Drawing.Size(300, 113);
            this.pariDate2.TabIndex = 12;
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
            pariTextBox1.TextBox.PlaceholderText = "Arbitres";
            pariTextBox1.LabelError.Text = "";
            pariDate1.PariTitle.Label.Text = "Date et heure";
            pariDate1.PariLabelError.Label.Text = "";
            pariDate2.PariTitle.Label.Text = "Date et heure";
            pariDate2.PariLabelError.Label.Text = "";
            button2.Text = "Ajouter";

            pariDate1.DateTimePicker.Format = DateTimePickerFormat.Custom;
            pariDate1.DateTimePicker.CustomFormat = "yyyy-MM-dd hh:mm";

            pariDate2.DateTimePicker.Format = DateTimePickerFormat.Custom;
            pariDate2.DateTimePicker.CustomFormat = "yyyy-MM-dd hh:mm";

            Cursor = Cursors.WaitCursor;
            var res = await Service.Evenements();
            var fpc = new List<Combo>();
            foreach (CompetitionModel f in res.Data) fpc.Add(new Combo { Text = f.Nomcompetition, Value = f.Id });
            pariComboItem1.ComboBox.DisplayMember = "Text";
            pariComboItem1.ComboBox.ValueMember = "Value";
            pariComboItem1.ComboBox.DataSource = fpc;

            var res2 = await Service.getEquipes();
            var fpc2 = new List<Combo>();
            foreach (EquipeModel f in res2.Data) fpc2.Add(new Combo { Text = f.Nomequipe, Value = f.Id });
            pariComboItem2.ComboBox.DisplayMember = "Text";
            pariComboItem2.ComboBox.ValueMember = "Value";
            pariComboItem2.ComboBox.DataSource = fpc2;

            var fpc3 = new List<Combo>();
            foreach (EquipeModel f in res2.Data) fpc3.Add(new Combo { Text = f.Nomequipe, Value = f.Id });
            pariComboItem3.ComboBox.DisplayMember = "Text";
            pariComboItem3.ComboBox.ValueMember = "Value";
            pariComboItem3.ComboBox.DataSource = fpc3;
            Cursor = Cursors.Arrow;
        }

        public PariTitle PariTitle { get => pariTitle1; set { pariTitle1 = value; pariTitle = value; } }
        public PariComboItem Compet { get => pariComboItem1; set { pariComboItem1 = value; compet = value; } }
        public PariComboItem Eq1 { get => pariComboItem2; set { pariComboItem2 = value; eq1 = value; } }
        public PariComboItem Eq2 { get => pariComboItem3; set { pariComboItem3 = value; eq2 = value; } }
        public Button Ajouter { get => button2; set { button2 = value; ajouter = value; } }

        private async void button2_Click(object sender, EventArgs e)
        {
            Cursor = Cursors.WaitCursor;
            var c = (Combo)pariComboItem1.ComboBox.SelectedItem;
            var idcompetition = c.Value;
            var c1 = (Combo)pariComboItem2.ComboBox.SelectedItem;
            var ide1 = c1.Value;
            var c2 = (Combo)pariComboItem3.ComboBox.SelectedItem;
            var ide2 = c2.Value;
            var arbitreNom = pariTextBox1.TextBox.Text;
            var date1 = pariDate1.DateTimePicker.Text;
            DateTime d1 = DateTime.Parse(date1);
            var date2 = pariDate1.DateTimePicker.Text;
            DateTime d2 = DateTime.Parse(date2);

            Task<MatchRest> da = Service.createMatch(
                idcompetition, ide1, ide2, arbitreNom, d1, d2
                );
            var d = await da;
            Cursor = Cursors.Arrow;
            if (d.status) Information.information(this, $"{d1} est ajouté avec succès");
            else Information.informationError(this, d.message);
        }
    }


}

