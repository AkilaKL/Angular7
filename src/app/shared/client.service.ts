import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  formData:Client;
   
  readonly rootURL = 'http://localhost:61191/api';
  list:Client[];
  

  constructor(private http:HttpClient) { }
  postClient(formData:Client){

   return this.http.post(this.rootURL+'/Clients/',formData);
  }
  putClient(formData:Client){

    return this.http.put(this.rootURL+'/Clients/'+formData.Clientname,formData);
   }
   getClient(Clientname){

    return this.http.get(this.rootURL+'/Clients/'+Clientname);
   }
   getClients(){

    return this.http.get(this.rootURL+'/Clients/');
   }
  refreshList()
  {
    return this.http.get(this.rootURL+'/Clients')
    .toPromise()
    .then(res=> this.list = res as Client[]);
  }
}
