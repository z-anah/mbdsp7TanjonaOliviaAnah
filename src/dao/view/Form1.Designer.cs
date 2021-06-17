namespace pari
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.login1 = new pari.src.dao.view.Login();
            this.pariSideBar1 = new pari.src.dao.view.user_control.panel.PariSideBar();
            this.competition1 = new pari.src.dao.view.user_control.panel.Competition();
            this.equipe1 = new pari.src.dao.view.user_control.panel.Equipe();
            this.joueur1 = new pari.src.dao.view.user_control.panel.Joueur();
            this.match1 = new pari.src.dao.view.user_control.panel.Match();
            this.SuspendLayout();
            // 
            // login1
            // 
            this.login1.Location = new System.Drawing.Point(306, 107);
            this.login1.Name = "login1";
            this.login1.Size = new System.Drawing.Size(290, 271);
            this.login1.TabIndex = 0;
            // 
            // pariSideBar1
            // 
            this.pariSideBar1.Location = new System.Drawing.Point(12, 12);
            this.pariSideBar1.Name = "pariSideBar1";
            this.pariSideBar1.Size = new System.Drawing.Size(247, 512);
            this.pariSideBar1.TabIndex = 2;
            // 
            // competition1
            // 
            this.competition1.Location = new System.Drawing.Point(259, 8);
            this.competition1.Name = "competition1";
            this.competition1.Size = new System.Drawing.Size(634, 513);
            this.competition1.TabIndex = 3;
            // 
            // equipe1
            // 
            this.equipe1.Location = new System.Drawing.Point(259, 8);
            this.equipe1.Name = "equipe1";
            this.equipe1.Size = new System.Drawing.Size(634, 513);
            this.equipe1.TabIndex = 4;
            // 
            // joueur1
            // 
            this.joueur1.Location = new System.Drawing.Point(259, 8);
            this.joueur1.Name = "joueur1";
            this.joueur1.Size = new System.Drawing.Size(634, 513);
            this.joueur1.TabIndex = 5;
            // 
            // match1
            // 
            this.match1.Location = new System.Drawing.Point(259, 8);
            this.match1.Name = "match1";
            this.match1.Size = new System.Drawing.Size(634, 513);
            this.match1.TabIndex = 6;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Window;
            this.ClientSize = new System.Drawing.Size(905, 533);
            this.Controls.Add(this.competition1);
            this.Controls.Add(this.match1);
            this.Controls.Add(this.pariSideBar1);
            this.Controls.Add(this.login1);
            this.Controls.Add(this.joueur1);
            this.Controls.Add(this.equipe1);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Form1";
            this.Text = "Pari";
            this.ResumeLayout(false);

        }

        #endregion

        private src.dao.view.Login login1;
        private src.dao.view.user_control.panel.PariSideBar pariSideBar1;
        private src.dao.view.user_control.panel.Competition competition1;
        private src.dao.view.user_control.panel.Equipe equipe1;
        private src.dao.view.user_control.panel.Joueur joueur1;
        private src.dao.view.user_control.panel.Match match1;
    }
}

