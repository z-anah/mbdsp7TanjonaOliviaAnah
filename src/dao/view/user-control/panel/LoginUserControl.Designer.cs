
namespace pari.src.dao.view
{
    partial class LoginUserControl
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
            this.textBoxLabeledMessagedUserControl1 = new pari.src.dao.view.user_control.TextBoxLabeledMessagedUserControl();
            this.textBoxLabeledMessagedUserControl2 = new pari.src.dao.view.user_control.TextBoxLabeledMessagedUserControl();
            this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
            this.checkBox1 = new System.Windows.Forms.CheckBox();
            this.button1 = new System.Windows.Forms.Button();
            this.flowLayoutPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // textBoxLabeledMessagedUserControl1
            // 
            this.textBoxLabeledMessagedUserControl1.BackColor = System.Drawing.SystemColors.Window;
            this.textBoxLabeledMessagedUserControl1.Location = new System.Drawing.Point(3, 3);
            this.textBoxLabeledMessagedUserControl1.Name = "textBoxLabeledMessagedUserControl1";
            this.textBoxLabeledMessagedUserControl1.Size = new System.Drawing.Size(271, 79);
            this.textBoxLabeledMessagedUserControl1.TabIndex = 12;
            // 
            // textBoxLabeledMessagedUserControl2
            // 
            this.textBoxLabeledMessagedUserControl2.BackColor = System.Drawing.SystemColors.Window;
            this.textBoxLabeledMessagedUserControl2.Location = new System.Drawing.Point(3, 88);
            this.textBoxLabeledMessagedUserControl2.Name = "textBoxLabeledMessagedUserControl2";
            this.textBoxLabeledMessagedUserControl2.Size = new System.Drawing.Size(271, 74);
            this.textBoxLabeledMessagedUserControl2.TabIndex = 13;
            // 
            // flowLayoutPanel1
            // 
            this.flowLayoutPanel1.Controls.Add(this.textBoxLabeledMessagedUserControl1);
            this.flowLayoutPanel1.Controls.Add(this.textBoxLabeledMessagedUserControl2);
            this.flowLayoutPanel1.Controls.Add(this.checkBox1);
            this.flowLayoutPanel1.Controls.Add(this.button1);
            this.flowLayoutPanel1.Location = new System.Drawing.Point(3, 3);
            this.flowLayoutPanel1.Name = "flowLayoutPanel1";
            this.flowLayoutPanel1.Size = new System.Drawing.Size(274, 265);
            this.flowLayoutPanel1.TabIndex = 14;
            // 
            // checkBox1
            // 
            this.checkBox1.AutoSize = true;
            this.checkBox1.Location = new System.Drawing.Point(3, 168);
            this.checkBox1.Name = "checkBox1";
            this.checkBox1.Size = new System.Drawing.Size(152, 19);
            this.checkBox1.TabIndex = 15;
            this.checkBox1.Text = "Enregistrer le formulaire";
            this.checkBox1.UseVisualStyleBackColor = true;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(3, 193);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(137, 23);
            this.button1.TabIndex = 16;
            this.button1.Text = "Se connecter";
            this.button1.UseVisualStyleBackColor = true;
            // 
            // LoginUserControl
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.flowLayoutPanel1);
            this.Name = "LoginUserControl";
            this.Size = new System.Drawing.Size(320, 271);
            this.flowLayoutPanel1.ResumeLayout(false);
            this.flowLayoutPanel1.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion
        private user_control.TextBoxLabeledMessagedUserControl textBoxLabeledMessagedUserControl1;
        private user_control.TextBoxLabeledMessagedUserControl textBoxLabeledMessagedUserControl2;
        private System.Windows.Forms.FlowLayoutPanel flowLayoutPanel1;
        private System.Windows.Forms.CheckBox checkBox1;
        private System.Windows.Forms.Button button1;
    }
}
