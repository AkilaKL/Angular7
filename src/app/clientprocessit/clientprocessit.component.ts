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

  constructor(public router: Router, public service: AddClientService, public clientservice: ClientService) { }
  processitlist:AddClient;
  client:ClientService;
  clientname: '';
  ngOnInit(): void {
    

    

    
  }

 getClient(Clientname: string){
  this.clientservice.getClient(this.clientname).toPromise().then(res =>{this.client= res as ClientService},
    err=>{console.log(err);
    }
    );
 
  
 }

  onButton(form:NgForm)
  {
    this.router.navigateByUrl('/ProcessIT');

  }
 

}
