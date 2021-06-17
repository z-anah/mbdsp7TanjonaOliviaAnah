using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace pari.src.dao.utilities
{
    class MyRegex
    {
        static public bool isEmail(String email)
        {
            Regex regex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$");
            Match match = regex.Match(email);
            if (match.Success)
                return true;
            else
                throw new Exception("Saisissez un email valide");
        }

        static public bool isEmpty(String text)
        {
            Regex regex = new Regex(@"^$");
            Match match = regex.Match(text);
            if (match.Success)
                throw new Exception("Compléter le formulaire");
            else
                return true;
        }
    }
}
