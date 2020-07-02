import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexPlotOptions, ApexFill, ApexStroke } from "ng-apexcharts";
import {ApexNonAxisChartSeries,ApexResponsive,ApexChart} from "ng-apexcharts";
import { AddClientService } from 'src/app/shared/add-client.service';
import { AddClient } from 'src/app/shared/add-client.model';
import { UserService, AuthenticationService } from 'src/app/_services';
import { Subscription, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/_models';


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any;
  serie: ApexNonAxisChartSeries;
  char: ApexChart;
  fill: ApexFill;
  label: any;
  color: any;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  effectifList: any[]=[];
  ineffectifList: any[]=[];
  effectifavecRList:any[]=[];
  currentSynthese: AddClient;
  currentUser:User
  currentSyntheseSubscription:Subscription;
  currentUserSubscription:Subscription;
  public currentSyntheseSubject: BehaviorSubject<AddClient>;
  
  
ngAfterContentChecked()  {
       
        
      
    }
  @ViewChild("chart") chart: ChartComponent;
  public PiechartOptions: Partial<ChartOptions>;
  public ScorechartOptions: Partial<ChartOptions>;
  public PiechartOptions1: Partial<ChartOptions>;
  public ScorechartOptions1: Partial<ChartOptions>;
  public PiechartOptions2: Partial<ChartOptions>;
  public ScorechartOptions2: Partial<ChartOptions>;
   getLists(): void {
	const obj = JSON.parse(this.Synthese);
	for (let key in Object.keys(obj)) {
		if ((obj[key] === "Effectif")) {
      this.effectifList.push(key);
      console.log(this.effectifList);
		}
		if ((obj[key] === "Ineffectif")) {
      this.ineffectifList.push(key);
      console.log(this.ineffectifList);
      
		}
		if ((obj[key] === "EffectifavecR")) {
      this.effectifavecRList.push(key);
      console.log(this.effectifavecRList);
     
    }
    
  }
 
  console.log(obj);

}

  constructor(public service: AddClientService, public userService: UserService, public authenticationService: AuthenticationService) {
    this.currentSyntheseSubscription = this.authenticationService.currentSynthese.subscribe(synthese => {
      this.currentSynthese = synthese})
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;}
       
      )
      
       
     
this.getLists();
    this.ScorechartOptions = {
      series: [66],
      chart: {
        height: 330
        ,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["Score"],
      colors: [
        '#4fa746'
      ],
    };
  
    
  
    this.PiechartOptions = {
      series: [8, 2, 1, 1],
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
    this.ScorechartOptions1 = {
      series: [40],
      chart: {
        height: 330
        ,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["Score"],
      colors: [
        '#f3c010'
      ],
    };
  
    
  
    this.PiechartOptions1 = {
      series: [4, 2, 2, 2],
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
    this.ScorechartOptions2 = {
      series: [16],
      chart: {
        height: 330
        ,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["Score"],
      colors: [
        '#dd3545'
      ],
    };
  
    
  
    this.PiechartOptions2 = {
      series: [1, 3, 1, 1],
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
  
  getById(id:number){
   this.userService.getById(id).toPromise().then(res =>this.currentUser= res as User );
     
     
  }  
  get Synthese(): any {
    return localStorage.getItem('currentSynthese');
    
     
}
  




}
