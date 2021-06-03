using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control
{
    public partial class PariComboItem : UserControl
    {
        private PariTitle pariTitle;
        private ComboBox comboBox;
        public PariComboItem()
        {
            InitializeComponent();
        }

        public PariTitle PariTitle
        {
            get => pariTitle1;
            set
            {
                pariTitle = value;
                pariTitle1 = value;
            }
        }

        public ComboBox ComboBox
        {
            get => comboBox1;
            set
            {
                comboBox = value;
                comboBox1 = value;
            }
        }
    }
}
