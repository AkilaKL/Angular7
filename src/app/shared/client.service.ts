import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


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

    return this.http.put(this.rootURL+'/Clients/'+formData.Password,formData);
   }
   getClient(Password:String){
    return this.http.get(this.rootURL+'/Clients/GetClientByName/'+Password);
   }
   /** GET hero by id. Will 404 if id not found */
    getClt(Password:String): Observable<Client> {
      const url = `${this.rootURL}/${Password}`;
      return this.http.get<Client>(url);
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
