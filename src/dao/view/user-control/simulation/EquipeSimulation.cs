using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control.simulation
{

    public partial class EquipeSimulation : UserControl
    {
        private ComboBox comboBox;
        private Button button;
        private PariTitle pariTitle;
        private PictureBox pictureBox;

        public ComboBox ComboBox
        {
            get => comboBox1;
            set
            {
                comboBox1 = value;
                comboBox = value;
            }
        }
        public Button Button
        {
            get => button1;
            set
            {
                button1 = value;
                button = value;
            }
        }
        public PariTitle PariTitle
        {
            get => pariTitle1;
            set
            {
                pariTitle1 = value;
                pariTitle = value;
            }
        }
        public PictureBox PictureBox
        {
            get => pictureBox1;
            set
            {
                pictureBox1 = value;
                pictureBox = value;
            }
        }

        public EquipeSimulation()
        {
            InitializeComponent();
        }
    }
}
