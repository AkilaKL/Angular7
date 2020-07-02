import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddClient } from './add-client.model';


@Injectable({
  providedIn: 'root'
  
})
export class AddClientService {
  
  readonly rootURL = 'http://localhost:62933/api';
  formData:AddClient
  listITGC:AddClient[];

  constructor(private http:HttpClient) { }
  postAddClient(formData:AddClient){

    return this.http.post(this.rootURL+'/ProcessITs/Post',formData);
  
  }
  
  getAddClient(){

    return this.http.get(this.rootURL+'/ProcessITs');
   }
   
}
