using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Net;
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
        private PictureBox formationPictureBox;

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

        public PictureBox Formation
        {
            get => pictureBox2;
            set
            {
                pictureBox2 = value;
                formationPictureBox = value;
            }
        }

        public EquipeSimulation()
        {
            InitializeComponent();
            pictureBox = pictureBox1;
            pariTitle1.Label.Text = "_ _ _";
        }
    }
}
