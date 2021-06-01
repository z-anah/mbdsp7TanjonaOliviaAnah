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
    public partial class LoginUserControl : UserControl
    {
        private TextBoxLabeledMessagedUserControl textBox;
        private TextBoxLabeledMessagedUserControl motPasse;
        public LoginUserControl()
        {
            InitializeComponent();
        }

        public TextBoxLabeledMessagedUserControl TextBox
        {
            get => textBoxLabeledMessagedUserControl1;
            set
            {
                textBox = value;
                textBoxLabeledMessagedUserControl1 = value;
            }
        }

        public TextBoxLabeledMessagedUserControl MotPasse
        {
            get => textBoxLabeledMessagedUserControl2;
            set
            {
                textBox = value;
                textBoxLabeledMessagedUserControl2 = value;
            }
        }
    }
}
