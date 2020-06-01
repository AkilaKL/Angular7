import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/client.model';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: Client[];

      
 

  constructor(public service:ClientService) { 
    this.service.getClients().toPromise().then(res =>this.clients = res as Client[]);
  }

  ngOnInit(): void {
    this.service.refreshList();
  }
  searchText = ""
  
  populateForm(e:Client)
  {
    
    this.service.formData = Object.assign({},e);
    this.service.formData.addNewRecord=false;
  }
  
    


}
