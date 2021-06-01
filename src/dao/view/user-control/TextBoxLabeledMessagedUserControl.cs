using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control
{
    public partial class TextBoxLabeledMessagedUserControl : UserControl
    {
        private Label label;
        private TextBox textBox;
        private Label messageErreurLabel;
        public TextBoxLabeledMessagedUserControl()
        {
            InitializeComponent();
        }

        public Label Label
        {
            get => labelPari;
            set
            {
                label = value;
                labelPari = value;
            }
        }

        public TextBox TextBox
        {
            get => textBox1;
            set
            {
                textBox1 = value;
                textBox = value;
            }
        }

        public Label MessageErreurLabel
        {
            get => MessageErreurLabelPari;
            set
            {
                messageErreurLabel = value;
                MessageErreurLabelPari = value;
            }
        }
    }
}
