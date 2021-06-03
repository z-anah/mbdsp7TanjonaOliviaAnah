using pari.src.dao.view.user_control.simulation;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control.panel
{
    public partial class Simulation : UserControl
    {
        private simulation.EquipeSimulation equipe1;
        private simulation.EquipeSimulation equipe2;
        private PariTitle pariTitle;
        private System.Windows.Forms.Button pause;
        private System.Windows.Forms.Button terminer;

        public Simulation()
        {
            InitializeComponent();
        }

        public EquipeSimulation Equipe1 { get => equipeSimulation1; set { equipeSimulation1 = value; equipe1 = value; } }
        public EquipeSimulation Equipe2 { get => equipeSimulation2; set { equipeSimulation2 = value; equipe2 = value; } }
        public PariTitle PariTitle { get => pariTitle1; set { pariTitle1 = value; pariTitle = value; } }
        public Button Pause { get => button1; set { button1 = value; pause = value; } }
        public Button Terminer { get => button2; set { button2 = value; terminer = value; } }
    }
}
