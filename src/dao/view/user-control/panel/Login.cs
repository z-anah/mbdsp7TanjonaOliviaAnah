using pari.src.dao.view.user_control;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
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
