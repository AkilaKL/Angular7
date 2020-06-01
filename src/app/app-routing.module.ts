import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { ProcessITComponent } from './ProcessIT/process-it.component';
import { ClientComponent } from './ProcessIT/client/client.component';
import { MAComponent } from './ProcessIT/ma/ma.component';
import { MCComponent } from './ProcessIT/mc/mc.component';
import { MOComponent } from './ProcessIT/mo/mo.component';
import { ClientprocessitComponent } from './clientprocessit/clientprocessit.component';
import { AddClientComponent } from './ProcessIT/add-client/add-client.component';
import { DashboardComponent } from './ProcessIT/dashboard/dashboard.component';




const routes: Routes = [
  {path: '' ,redirectTo:'MC',pathMatch: 'full'},
  {path:'ProcessIT',component: ProcessITComponent},
  {path:'addclient',component: AddClientComponent},
  {path:'clientprocessit', component: ClientprocessitComponent},
  {path:'client', component: ClientComponent },
  {path:'dashboard', component: DashboardComponent },
  
  {path:'MA', component: MAComponent},
  {path:'MC', component: MCComponent},
  {path:'MO', component: MOComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClientprocessitComponent, MAComponent];