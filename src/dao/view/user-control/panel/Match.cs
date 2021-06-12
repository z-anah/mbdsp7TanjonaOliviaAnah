using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control.panel
{
    public partial class Match : UserControl
    {

        private PariTitle pariTitle;
        private PariTextBox pariTextBox;
        private System.Windows.Forms.Button importer;
        private PariComboItem compet;
        private PariComboItem eq1;
        private PariComboItem eq2;
        private PariComboItem formationEq1;
        private PariComboItem formationEq2;
        private System.Windows.Forms.Button ajouter;
        private PariComboItem arbitre;
        private PariDate pariDate;

        public Match()
        {
            InitializeComponent();
        }

        public PariTitle PariTitle { get => pariTitle1; set { pariTitle1 = value; pariTitle = value; } }
        public PariTextBox PariTextBox { get => pariTextBox1; set { pariTextBox1 = value; pariTextBox = value; } }
        public Button Importer { get => button1; set { button1 = value; importer = value; } }
        public PariComboItem Compet { get => pariComboItem1; set { pariComboItem1 = value; compet = value; } }
        public PariComboItem Eq1 { get => pariComboItem2; set { pariComboItem2 = value; eq1 = value; } }
        public PariComboItem Eq2 { get => pariComboItem3; set { pariComboItem3 = value; eq2 = value; } }
        public PariComboItem FormationEq1 { get => pariComboItem4; set { pariComboItem4 = value; formationEq1 = value; } }
        public PariComboItem FormationEq2 { get => pariComboItem5; set { pariComboItem5 = value; formationEq2 = value; } }
        public Button Ajouter { get => button2; set { button2 = value; ajouter = value; } }
        public PariComboItem Arbitre { get => pariComboItem6; set { pariComboItem6 = value; arbitre = value; } }
        public PariDate PariDate { get => pariDate1; set { pariDate1 = value; pariDate = value; } }

    }
}
