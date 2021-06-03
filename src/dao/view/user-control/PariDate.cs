using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control
{
    public partial class PariDate : UserControl
    {
        private PariTitle pariTitle;
        private DateTimePicker dateTimePicker;
        private PariLabelError pariLabelError;

        public PariDate()
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

        public DateTimePicker DateTimePicker
        {
            get => dateTimePicker1;
            set
            {
                dateTimePicker = value;
                dateTimePicker1 = value;
            }
        }

        public PariLabelError PariLabelError
        {
            get => pariLabelError1;
            set
            {
                pariLabelError = value;
                pariLabelError1 = value;
            }
        }
    }
}
