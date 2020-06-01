import { Component, OnInit, ViewChild } from '@angular/core';


import { ChartComponent, ApexPlotOptions } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { AddClientService } from 'src/app/shared/add-client.service';
import { AddClient } from 'src/app/shared/add-client.model';
import { NgForm } from '@angular/forms';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any;
  serie: ApexNonAxisChartSeries;
  char: ApexChart;
  
  label: any;
  color: any;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ProcessIT: AddClient[];
  totalEffMA: number;
  totalEffavecRMA: number;
  totalIneffMA: number;
  totalNTMA: number;
  totalEffMC: number;
  totalEffavecRMC: number;
  totalIneffMC: number;
  totalNTMC: number;
  totalEffMO: number;
  totalEffavecRMO: number;
  totalIneffMO: number;
  totalNTMO: number;
ngAfterContentChecked()  {
       
        
      
    }
  @ViewChild("chart") chart: ChartComponent;
  public PiechartOptions: Partial<ChartOptions>;
  public RadialbarchartOptions: Partial<ChartOptions>;

  

  constructor(public service: AddClientService) {
    this.service.getAddClient().toPromise().then(res =>this.ProcessIT = res as AddClient[]);
    this.RadialbarchartOptions = {
      series: [44, 55, 67, 83],
      chart: {
        width: 400,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: true,
              label: "Total",
              formatter: function(w) {
                return "12";
              }
            }
          }
        }
      },
      labels: ["Effectif", "Effectif avec recommandation", "Ineffectif", "Non testé"],
      colors: [
        '#4fa746', '#f3c010', '#dd3545', '#6c747d'
      ],
      
    };
    
  
    this.PiechartOptions = {
      series: [44, 55, 13, 43],
      chart: {
        width: 500,
        type: "pie"
      },
      labels: ["Effectif", "Effectif avec recommandation", "Ineffectif", "Non testé"],
      colors: [
        '#4fa746', '#f3c010', '#dd3545', '#6c747d'
      ],


      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

   }

  ngOnInit(): void {
  }
  
    

  

}
