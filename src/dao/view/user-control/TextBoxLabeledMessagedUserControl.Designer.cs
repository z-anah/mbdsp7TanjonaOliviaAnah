
namespace pari.src.dao.view.user_control
{
    partial class TextBoxLabeledMessagedUserControl
    {
        /// <summary> 
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.labelPari = new System.Windows.Forms.Label();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.MessageErreurLabelPari = new System.Windows.Forms.Label();
            this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
            this.flowLayoutPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // labelPari
            // 
            this.labelPari.AutoSize = true;
            this.labelPari.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.labelPari.ForeColor = System.Drawing.SystemColors.WindowText;
            this.labelPari.Location = new System.Drawing.Point(3, 0);
            this.labelPari.Name = "labelPari";
            this.labelPari.Size = new System.Drawing.Size(34, 15);
            this.labelPari.TabIndex = 0;
            this.labelPari.Text = "Nom";
            // 
            // textBox1
            // 
            this.textBox1.BackColor = System.Drawing.SystemColors.Window;
            this.textBox1.Location = new System.Drawing.Point(3, 18);
            this.textBox1.Name = "textBox1";
            this.textBox1.PlaceholderText = "Nom";
            this.textBox1.Size = new System.Drawing.Size(168, 23);
            this.textBox1.TabIndex = 1;
            // 
            // MessageErreurLabelPari
            // 
            this.MessageErreurLabelPari.AutoSize = true;
            this.MessageErreurLabelPari.ForeColor = System.Drawing.Color.Red;
            this.MessageErreurLabelPari.Location = new System.Drawing.Point(3, 44);
            this.MessageErreurLabelPari.Name = "MessageErreurLabelPari";
            this.MessageErreurLabelPari.Size = new System.Drawing.Size(161, 15);
            this.MessageErreurLabelPari.TabIndex = 2;
            this.MessageErreurLabelPari.Text = "Exemple de message d\'erreur";
            // 
            // flowLayoutPanel1
            // 
            this.flowLayoutPanel1.Controls.Add(this.labelPari);
            this.flowLayoutPanel1.Controls.Add(this.textBox1);
            this.flowLayoutPanel1.Controls.Add(this.MessageErreurLabelPari);
            this.flowLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.flowLayoutPanel1.Name = "flowLayoutPanel1";
            this.flowLayoutPanel1.Size = new System.Drawing.Size(176, 67);
            this.flowLayoutPanel1.TabIndex = 3;
            // 
            // TextBoxLabeledMessagedUserControl
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Window;
            this.Controls.Add(this.flowLayoutPanel1);
            this.Name = "TextBoxLabeledMessagedUserControl";
            this.Size = new System.Drawing.Size(177, 68);
            this.flowLayoutPanel1.ResumeLayout(false);
            this.flowLayoutPanel1.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label title;
        private System.Windows.Forms.Label labelPari;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.Label MessageErreurLabelPari;
        private System.Windows.Forms.FlowLayoutPanel flowLayoutPanel1;
    }
}
