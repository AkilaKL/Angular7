import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MA } from './ma.model';

@Injectable({
  providedIn: 'root'
})
export class MAService {
  readonly rootURL = 'http://localhost:61191/api';
  formData: MA

  

  constructor(private http:HttpClient) { }
  
  postMA(formData:MA){

   return this.http.post(this.rootURL+'/MA',formData);
  }
}
