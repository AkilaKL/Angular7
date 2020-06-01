import { Injectable } from '@angular/core';
import { MO } from './mo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MOService {
  readonly rootURL = 'http://localhost:61191/api';
  formData: MO

  constructor(private http:HttpClient) { }
  
  postMO(formData:MO){

   return this.http.post(this.rootURL+'/MO',formData);
  }
}
