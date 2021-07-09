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
            Console.WriteLine("tste");
            var request = WebRequest.Create("http://localhost:5000/api/download/profil_1624427102818.jpeg");
            using (var response = request.GetResponse())
            using (var stream = response.GetResponseStream())
            {
                pictureBox1.Image = Bitmap.FromStream(stream);
                pictureBox1.SizeMode = PictureBoxSizeMode.Zoom;
            }
        }
    }
}
