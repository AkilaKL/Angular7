import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessITComponent } from './Processit/process-it.component';
import { ClientComponent } from './ProcessIT/client/client.component';
import { MAComponent } from './ProcessIT/ma/ma.component';
import { MCComponent } from './ProcessIT/mc/mc.component';
import { MOComponent } from './ProcessIT/mo/mo.component';
import { ClientService } from './shared/client.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListClientComponent } from './ProcessIT/list-client/list-client.component';
import { AddClientComponent } from './ProcessIT/add-client/add-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ToastrModule } from 'ngx-toastr';
import { ClientprocessitComponent } from './clientprocessit/clientprocessit.component';
import { MAService } from './shared/ma.service';
import { MOService } from './shared/mo.service';
import { MCService } from './shared/mc.service';
import { HighchartsChartModule } from 'highcharts-angular';
import {ChartsModule} from 'ng2-charts';
import { NgApexchartsModule} from 'ng-apexcharts' ;
import { DashboardComponent } from './ProcessIT/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ProcessITComponent,
    ClientComponent,
    MAComponent,
    MCComponent,
    MOComponent,
    ListClientComponent,
    AddClientComponent,
    ClientprocessitComponent,
    DashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HighchartsChartModule,
    ChartsModule,
    NgApexchartsModule
    

  ],
  providers: [ClientService, MAService, MOService, MCService
    
],
  bootstrap: [AppComponent]
})
export class AppModule { }
