using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Forms;

namespace pari.src.dao.utilities
{
    public class Information
    {


        public static void information(IWin32Window p, string message)
        {
            MessageBox.Show(
                p,
                message,
                "Pari",
                MessageBoxButtons.OK,
                MessageBoxIcon.Information
                );
        }

        public static void informationError(IWin32Window p, string message)
        {
            MessageBox.Show(
                p, message, "Pari",
                MessageBoxButtons.OK,
                MessageBoxIcon.Error
                );
        }

        public static DialogResult question(IWin32Window p, string message)
        {
            return MessageBox.Show(
                p,
                message,
                "Pari",
                MessageBoxButtons.YesNo,
                MessageBoxIcon.Question,
                MessageBoxDefaultButton.Button2
                );
        }
    }
}
