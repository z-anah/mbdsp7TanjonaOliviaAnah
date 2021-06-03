using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control
{
    public partial class PariTitle : UserControl
    {
        private Label label;
        public PariTitle()
        {
            InitializeComponent();
        }

        public Label Label
        {
            get => label1;
            set { label = value; label1 = value; }
        }
    }
}
