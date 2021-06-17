using pari.src.dao.utilities;
using pari.src.dao.view.user_control;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace pari.src.dao.view
{
    public partial class Login : UserControl
    {
        private PariTextBox textBox;
        private PariTextBox motPasse;
        private CheckBox checkBox;
        private Button button;
        private Label labelError;
        public Login()
        {
            InitializeComponent();
            textBoxEmail.Label.Text = "Email";
            textBoxEmail.TextBox.PlaceholderText = "Email";
            textBoxEmail.LabelError.Text = "";
            textBoxPassword.Label.Text = "Mots de passe";
            textBoxPassword.TextBox.PlaceholderText = "Mots de passe";
            textBoxPassword.TextBox.PasswordChar = '*';
            textBoxPassword.LabelError.Text = "";
            pariLabelError1.Label.Text = "";
        }

        public bool isValide()
        {
            try
            {
                textBoxEmail.LabelError.Text = "";
                textBoxPassword.LabelError.Text = "";
                String email = textBoxEmail.TextBox.Text;
                MyRegex.isEmail(email);
            }
            catch (Exception e)
            {
                textBoxEmail.LabelError.Text = e.Message;
                throw e;
            }
            try
            {
                String mdp = textBoxPassword.TextBox.Text;
                MyRegex.isEmpty(mdp);
                return true;
            }
            catch (Exception e)
            {
                textBoxPassword.LabelError.Text = e.Message;
                throw e;
            }
        }

        public PariTextBox TextBox
        {
            get => textBoxEmail;
            set
            {
                textBox = value;
                textBoxEmail = value;
            }
        }

        public PariTextBox MotPasse
        {
            get => textBoxPassword;
            set
            {
                motPasse = value;
                textBoxPassword = value;
            }
        }

        public CheckBox CheckBox
        {
            get => checkBox1;
            set
            {
                checkBox = value;
                checkBox1 = value;
            }
        }

        public Button Button
        {
            get => button1;
            set { button = value; button1 = value; }
        }

        public Label LabelError
        {
            get => pariLabelError1.Label;
            set { pariLabelError1.Label = value; labelError = value; }
        }
    }
}
