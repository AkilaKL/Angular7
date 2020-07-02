import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddClientService } from '../shared/add-client.service';
import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client.model';
import { AddClient } from '../shared/add-client.model';


@Component({
  selector: 'app-clientprocessit',
  templateUrl: './clientprocessit.component.html',
  styleUrls: ['./clientprocessit.component.css']
})
export class ClientprocessitComponent implements OnInit {

  constructor(public router: Router, public service: AddClientService, public clientservice: ClientService) {
    this.clientservice.getClients().toPromise().then(res =>this.clients = res as Client[]);
   }
  clients:Client[];
  processitlist:AddClient;
  client: Client
   
  
  ngOnInit(): void {
    

    

    
  }

 getClt(Password:string){
  this.clientservice.getClt(Password).toPromise().then( 
    res =>{this.client = res as Client
      ;
      
      console.log(res);
    },

       )
  
 
  
 }

  onButton(form:NgForm)
  {
    this.router.navigateByUrl('/ProcessIT');

  }
 

}
