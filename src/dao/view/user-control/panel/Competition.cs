﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control.panel
{
    public partial class Competition : UserControl
    {
        private PariTitle pariTitle1;
        private PariTextBox pariTextBox1;
        private Button button1;
        private DateTimePicker dateTimePicker1;
        private DateTimePicker dateTimePicker2;
        private PariTitle pariTitle2;
        private PariTitle pariTitle3;
        private PariLabelError pariLabelError1;
        private FlowLayoutPanel flowLayoutPanel1;

        public Competition()
        {
            InitializeComponent();
        }

        private void InitializeComponent()
        {
            this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
            this.pariTitle1 = new pari.src.dao.view.user_control.PariTitle();
            this.pariTextBox1 = new pari.src.dao.view.user_control.PariTextBox();
            this.pariTitle2 = new pari.src.dao.view.user_control.PariTitle();
            this.dateTimePicker1 = new System.Windows.Forms.DateTimePicker();
            this.pariTitle3 = new pari.src.dao.view.user_control.PariTitle();
            this.dateTimePicker2 = new System.Windows.Forms.DateTimePicker();
            this.pariLabelError1 = new pari.src.dao.view.user_control.PariLabelError();
            this.button1 = new System.Windows.Forms.Button();
            this.flowLayoutPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // flowLayoutPanel1
            // 
            this.flowLayoutPanel1.Controls.Add(this.pariTitle1);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox1);
            this.flowLayoutPanel1.Controls.Add(this.pariTitle2);
            this.flowLayoutPanel1.Controls.Add(this.dateTimePicker1);
            this.flowLayoutPanel1.Controls.Add(this.pariTitle3);
            this.flowLayoutPanel1.Controls.Add(this.dateTimePicker2);
            this.flowLayoutPanel1.Controls.Add(this.pariLabelError1);
            this.flowLayoutPanel1.Controls.Add(this.button1);
            this.flowLayoutPanel1.Location = new System.Drawing.Point(3, 3);
            this.flowLayoutPanel1.Name = "flowLayoutPanel1";
            this.flowLayoutPanel1.Size = new System.Drawing.Size(342, 507);
            this.flowLayoutPanel1.TabIndex = 0;
            // 
            // pariTitle1
            // 
            this.pariTitle1.Location = new System.Drawing.Point(3, 3);
            this.pariTitle1.Name = "pariTitle1";
            this.pariTitle1.Size = new System.Drawing.Size(200, 23);
            this.pariTitle1.TabIndex = 0;
            this.pariTitle1.Load += new System.EventHandler(this.pariTitle1_Load);
            this.pariTitle1.Label.Text = "haha";
            // 
            // pariTextBox1
            // 
            this.pariTextBox1.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox1.Location = new System.Drawing.Point(3, 32);
            this.pariTextBox1.Name = "pariTextBox1";
            this.pariTextBox1.Size = new System.Drawing.Size(261, 74);
            this.pariTextBox1.TabIndex = 1;
            // 
            // pariTitle2
            // 
            this.pariTitle2.Location = new System.Drawing.Point(3, 112);
            this.pariTitle2.Name = "pariTitle2";
            this.pariTitle2.Size = new System.Drawing.Size(200, 23);
            this.pariTitle2.TabIndex = 5;
            // 
            // dateTimePicker1
            // 
            this.dateTimePicker1.Location = new System.Drawing.Point(3, 141);
            this.dateTimePicker1.Name = "dateTimePicker1";
            this.dateTimePicker1.Size = new System.Drawing.Size(200, 23);
            this.dateTimePicker1.TabIndex = 3;
            // 
            // pariTitle3
            // 
            this.pariTitle3.Location = new System.Drawing.Point(3, 170);
            this.pariTitle3.Name = "pariTitle3";
            this.pariTitle3.Size = new System.Drawing.Size(200, 23);
            this.pariTitle3.TabIndex = 6;
            // 
            // dateTimePicker2
            // 
            this.dateTimePicker2.Location = new System.Drawing.Point(3, 199);
            this.dateTimePicker2.Name = "dateTimePicker2";
            this.dateTimePicker2.Size = new System.Drawing.Size(200, 23);
            this.dateTimePicker2.TabIndex = 4;
            // 
            // pariLabelError1
            // 
            this.pariLabelError1.Location = new System.Drawing.Point(3, 228);
            this.pariLabelError1.Name = "pariLabelError1";
            this.pariLabelError1.Size = new System.Drawing.Size(351, 25);
            this.pariLabelError1.TabIndex = 7;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(3, 259);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(133, 23);
            this.button1.TabIndex = 2;
            this.button1.Text = "Ajouter";
            this.button1.UseVisualStyleBackColor = true;
            // 
            // Competition
            // 
            this.Controls.Add(this.flowLayoutPanel1);
            this.Name = "Competition";
            this.Size = new System.Drawing.Size(634, 513);
            this.flowLayoutPanel1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        private void pariTitle1_Load(object sender, EventArgs e)
        {

        }
    }
}
