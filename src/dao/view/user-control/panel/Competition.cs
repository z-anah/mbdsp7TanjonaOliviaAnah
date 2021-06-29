using RestSharp;
using System;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace pari.src.dao.view.user_control.panel
{
    public partial class Competition : UserControl
    {
        private PariTitle pariTitle1;
        private PariTextBox pariTextBox1;
        private Button button1;
        private DateTimePicker dateTimePicker1;
        private DateTimePicker dateTimePicker2;
        private PariTitle pariTitle2;
        private PariTitle pariTitle3;
        private PariLabelError pariLabelError1;
        private FlowLayoutPanel flowLayoutPanel1;

        public Competition()
        {
            InitializeComponent();
        }

        private void InitializeComponent()
        {
            this.flowLayoutPanel1 = new FlowLayoutPanel();
            this.pariTitle1 = new PariTitle();
            this.pariTextBox1 = new PariTextBox();
            this.pariTitle2 = new PariTitle();
            this.dateTimePicker1 = new DateTimePicker();
            this.pariTitle3 = new PariTitle();
            this.dateTimePicker2 = new DateTimePicker();
            this.pariLabelError1 = new PariLabelError();
            this.button1 = new Button();
            this.flowLayoutPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // flowLayoutPanel1
            // 
            this.flowLayoutPanel1.Controls.Add(this.pariTitle1);
            this.flowLayoutPanel1.Controls.Add(this.pariTextBox1);
            this.flowLayoutPanel1.Controls.Add(this.pariTitle2);
            this.flowLayoutPanel1.Controls.Add(this.dateTimePicker1);
            this.flowLayoutPanel1.Controls.Add(this.pariTitle3);
            this.flowLayoutPanel1.Controls.Add(this.dateTimePicker2);
            this.flowLayoutPanel1.Controls.Add(this.pariLabelError1);
            this.flowLayoutPanel1.Controls.Add(this.button1);
            this.flowLayoutPanel1.Location = new System.Drawing.Point(3, 3);
            this.flowLayoutPanel1.Name = "flowLayoutPanel1";
            this.flowLayoutPanel1.Size = new System.Drawing.Size(342, 507);
            this.flowLayoutPanel1.TabIndex = 0;
            // 
            // pariTitle1
            // 
            this.pariTitle1.Location = new System.Drawing.Point(3, 3);
            this.pariTitle1.Name = "pariTitle1";
            this.pariTitle1.Size = new System.Drawing.Size(200, 23);
            this.pariTitle1.TabIndex = 0;
            this.pariTitle1.Load += new System.EventHandler(this.pariTitle1_Load);
            this.pariTitle1.Label.Text = "Ajouter une compétition";
            // 
            // pariTextBox1
            // 
            this.pariTextBox1.BackColor = System.Drawing.SystemColors.Window;
            this.pariTextBox1.Location = new System.Drawing.Point(3, 32);
            this.pariTextBox1.Name = "pariTextBox1";
            this.pariTextBox1.Size = new System.Drawing.Size(261, 74);
            this.pariTextBox1.TabIndex = 1;
            this.pariTextBox1.LabelError.Text = "";
            this.pariTextBox1.Label.Text = "Compétition";
            this.pariTextBox1.TextBox.PlaceholderText = "Nom de la compétition";
            // 
            // pariTitle2
            // 
            this.pariTitle2.Location = new System.Drawing.Point(3, 112);
            this.pariTitle2.Name = "pariTitle2";
            this.pariTitle2.Size = new System.Drawing.Size(200, 23);
            this.pariTitle2.TabIndex = 5;
            this.pariTitle2.Label.Text = "Date début";
            // 
            // dateTimePicker1
            // 
            this.dateTimePicker1.Location = new System.Drawing.Point(3, 141);
            this.dateTimePicker1.Name = "dateTimePicker1";
            this.dateTimePicker1.Size = new System.Drawing.Size(200, 23);
            this.dateTimePicker1.TabIndex = 3;
            // 
            // pariTitle3
            // 
            dateTimePicker1.Format = DateTimePickerFormat.Custom;
            dateTimePicker1.CustomFormat = "yyyy-MM-dd";
            this.pariTitle3.Location = new System.Drawing.Point(3, 170);
            this.pariTitle3.Name = "pariTitle3";
            this.pariTitle3.Size = new System.Drawing.Size(200, 23);
            this.pariTitle3.TabIndex = 6;
            this.pariTitle3.Label.Text = "Date fin";
            // 
            // dateTimePicker2
            // 
            dateTimePicker2.Format = DateTimePickerFormat.Custom;
            dateTimePicker2.CustomFormat = "yyyy-MM-dd";
            this.dateTimePicker2.Location = new System.Drawing.Point(3, 199);
            this.dateTimePicker2.Name = "dateTimePicker2";
            this.dateTimePicker2.Size = new System.Drawing.Size(200, 23);
            this.dateTimePicker2.TabIndex = 4;
            // 
            // pariLabelError1
            // 
            this.pariLabelError1.Location = new System.Drawing.Point(3, 228);
            this.pariLabelError1.Name = "pariLabelError1";
            this.pariLabelError1.Size = new System.Drawing.Size(351, 25);
            this.pariLabelError1.TabIndex = 7;
            this.pariLabelError1.Label.Text = "";
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(3, 259);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(133, 23);
            this.button1.TabIndex = 2;
            this.button1.Text = "Ajouter";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // Competition
            // 
            this.Controls.Add(this.flowLayoutPanel1);
            this.Name = "Competition";
            this.Size = new System.Drawing.Size(634, 513);
            this.flowLayoutPanel1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        private void pariTitle1_Load(object sender, EventArgs e)
        {

        }

        private async void button1_Click(object sender, EventArgs e)
        {
            this.pariLabelError1.Label.Text = "";
            this.pariTextBox1.LabelError.Text = "";
            var nomCompetition = pariTextBox1.TextBox.Text;
            var dateDebut = dateTimePicker1.Text;
            var dateFin = dateTimePicker2.Text;
            DateTime d1 = DateTime.Parse(dateDebut);
            DateTime d2 = DateTime.Parse(dateFin);
            if (nomCompetition.Length >= 3)
            {
                if (d1.Date < d2.Date)
                {
                    var res = this.question(nomCompetition, dateDebut, dateFin);
                    if (res == DialogResult.Yes)
                    {
                        Task<CompetitionRest> ca = this.createCompetitionAsync(nomCompetition, dateDebut, dateFin);
                        CompetitionRest c = await ca;
                        Console.WriteLine(c.status);
                        Console.WriteLine(c.message);
                        this.information(nomCompetition, dateDebut, dateFin);
                    }
                }
                else this.pariLabelError1.Label.Text = "Date fin doit être supérieur à Date début";
            }
            else this.pariTextBox1.LabelError.Text = "Nom de la compétition non valide";
        }

        private async Task<CompetitionRest> createCompetitionAsync(string nomCompetition, string dateDebut, string dateFin)
        {
            var client = new RestClient("http://localhost:5000/api");
            var request = new RestRequest("/competition/create");
            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(new { nomCompetition, dateDebut, dateFin });
            return await client.PostAsync<CompetitionRest>(request);
        }

        private void information(string nomCompetition, string dateDebut, string dateFin)
        {
            MessageBox.Show(
                this,
                $"{nomCompetition}\ndu {dateDebut}\nau {dateFin}\nest ajouté avec succès",
                "Pari",
                MessageBoxButtons.OK,
                MessageBoxIcon.Information
                );
        }

        private DialogResult question(string nomCompetition, string dateDebut, string dateFin)
        {
            return MessageBox.Show(
                this,
                $"Êtes-vous sûr de vouloir ajouter\n{nomCompetition}\ndu {dateDebut}\nau {dateFin} ? ",
                "Pari",
                MessageBoxButtons.YesNo,
                MessageBoxIcon.Question,
                MessageBoxDefaultButton.Button2
                );
        }
    }

    internal class CompetitionRest
    {
        public bool status { get; internal set; }
        public String message { get; internal set; }
    }
}
