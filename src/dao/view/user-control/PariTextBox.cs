using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control
{
    public partial class PariTextBox : UserControl
    {
        private Label label;
        private TextBox textBox;
        private Label labelError;
        public PariTextBox()
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

        public Label LabelError
        {
            get => pariLabelError1.Label;
            set
            {
                pariLabelError1.Label = value;
                labelError = value;
            }
        }

        private void flowLayoutPanel1_Paint(object sender, PaintEventArgs e)
        {

        }
    }
}
