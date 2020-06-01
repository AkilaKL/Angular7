import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MAService } from 'src/app/shared/ma.service';
import { ToastrService } from 'ngx-toastr';
import * as Highcharts from 'highcharts';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers,
  ApexLegend,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexDataLabels
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  colors: any;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  legend: ApexLegend;
};





@Component({
  selector: 'app-ma',
  templateUrl: './ma.component.html',
  styleUrls: ['./ma.component.css']
})
export class MAComponent implements OnInit {
  
  @ViewChild("chart") chart: ChartComponent;
  public RadarchartOptions1: Partial<ChartOptions>;
  public BarchartOptions1: Partial<ChartOptions>;
  public RadarchartOptions2: Partial<ChartOptions>;
  public BarchartOptions2: Partial<ChartOptions>;
  public RadarchartOptions3: Partial<ChartOptions>;
  public BarchartOptions3: Partial<ChartOptions>;

  constructor() {
    this.BarchartOptions1 = {
      series: [
        {
          name: "Effectif",
          data: [7, 6, 8]
        },
        {
          name: "Effectif avec recommandation",
          data: [3, 2, 3]
        },
        {
          name: "Ineffectif",
          data: [1, 3, 1]
        },
        {
          name: "Non testé",
          data: [1, 1, 0]
        },
        
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "Tableau de bord comparatif"
      },
      xaxis: {
        categories: [2018, 2019, 2020],
        labels: {
          formatter: function(val) {
            return val ;
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      
      fill: {
        opacity: 1
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 40
      },
      colors: [
        '#4fa746', '#f3c010', '#dd3545', '#6c747d'
      ],
    };
    this.RadarchartOptions1 = {
      series: [
        {
          name: "2018",
          data: [8, 2, 1, 1]
        },
        {
          name: "2019",
          data: [6, 2, 2, 2]
        },
        {
          name: "2020",
          data: [7, 3,1, 1]
        },
        
      ],
      colors:['#D2D6D0', '#6c747d', '#e2c820', ],
      chart: {
        height: 400,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: "Radar Chart"
      },
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["Effectif", "Effectif avec recommandation", "Ineffectif","Non testé",]
      }
    };
    this.BarchartOptions2 = {
      series: [
        {
          name: "Effectif",
          data: [5, 7, 6]
        },
        {
          name: "Effectif avec recommandation",
          data: [3, 2, 2]
        },
        {
          name: "Ineffectif",
          data: [2, 1, 1]
        },
        {
          name: "Non testé",
          data: [0, 0, 1]
        },
        
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "Tableau de bord comparatif"
      },
      xaxis: {
        categories: [2018, 2019, 2020],
        labels: {
          formatter: function(val) {
            return val ;
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 40
      },
      colors: [
        '#4fa746', '#f3c010', '#dd3545', '#6c747d'
      ],
    };
    this.RadarchartOptions2 = {
      series: [
        {
          name: "2018",
          data: [5, 4, 1, 0]
        },
        {
          name: "2019",
          data: [4, 3, 2, 1]
        },
        {
          name: "2020",
          data: [6, 2, 1, 1]
        },
        
      ],
      colors:['#D2D6D0', '#6c747d', '#e2c820', ],
      chart: {
        height: 400,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: "Radar Chart"
      },
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["Effectif", "Effectif avec recommandation", "Ineffectif","Non testé",]
      }
    };
    this.BarchartOptions3 = {
      series: [
        {
          name: "Effectif",
          data: [3, 5, 4]
        },
        {
          name: "Effectif avec recommandation",
          data: [1, 1, 1]
        },
        {
          name: "Ineffectif",
          data: [1, 0, 1]
        },
        {
          name: "Non testé",
          data: [1, 0, 0]
        },
        
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "Tableau de bord comparatif"
      },
      xaxis: {
        categories: [2018, 2019, 2020],
        labels: {
          formatter: function(val) {
            return val;
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      
      fill: {
        opacity: 1
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 40
      },
      colors: [
        '#4fa746', '#f3c010', '#dd3545', '#6c747d'
      ],
    };
    this.RadarchartOptions3 = {
      series: [
        {
          name: "2018",
          data: [3, 1, 1, 1]
        },
        {
          name: "2019",
          data: [5, 1, 0, 0]
        },
        {
          name: "2020",
          data: [4, 1, 1, 0]
        },
        
      ],
      colors:['#D2D6D0', '#6c747d', '#e2c820', ],
      chart: {
        height: 400,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: "Radar Chart"
      },
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["Effectif", "Effectif avec recommandation", "Ineffectif","Non testé",]
      }
    };
  }
  ngOnInit(): void {
  }
}
