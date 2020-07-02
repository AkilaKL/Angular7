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
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HomeComponent } from './home';




const routes: Routes = [
  {path: '' ,redirectTo:'MC',pathMatch: 'full'},
  {path:'ProcessIT',component: ProcessITComponent},
  
  {path:'clientprocessit', component: ClientprocessitComponent},
  {path:'client', component: ClientComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  
  {path:'MC', component: MCComponent},
  {path:'MO', component: MOComponent},
  { path: 'home',
    component: HomeComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'addclient', // child route path
        component: AddClientComponent // child route component that the router renders
      },
      {
        path: 'dashboard',
        component: DashboardComponent // another child route component that the router renders
      },
      {
        path: 'dashboardComparative',
        component: MAComponent // another child route component that the router renders
      }
    ] },
 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClientprocessitComponent, MAComponent];