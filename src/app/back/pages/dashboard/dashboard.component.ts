import { Component, OnInit } from '@angular/core';
import { Service } from 'app/service/Service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  //match
  public chartDatasets1: Array<any>;
  public chartLabels1: Array<any>;
  public chartType1: string = 'pie';
  public chartColors1: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
  public chartOptions1: any = {
    responsive: true
  };

  //montant
  public chartType: string = 'bar';
  public chartDatasets: Array<any>;
  public chartLabels: Array<any>;
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };

  //somme
  sommeMontant = 0;
  totalClient = 0;
  totalMatch = 0;


  constructor(private service : Service) {}
  ngOnInit(): void {
    this.service.compteProgressionMatch().subscribe(value =>{
      this.chartDatasets1 = [{ data: value.data, label: 'Progression  match' }]
      this.chartLabels1 = value.label;
      this.totalMatch = value.totalMatch;
    })
    this.service.statRecharge().subscribe(value =>{
      this.chartDatasets = [{ data: value.dataMontant, label: 'Statistique de recharge' }]
      this.chartLabels = value.dataLabel;
      this.sommeMontant = value.somme;
    })
    this.service.compteClient().subscribe(value =>{
      this.totalClient = value.count;
    })

  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
