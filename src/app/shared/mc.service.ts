import { Injectable } from '@angular/core';
import { MC } from './mc.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MCService {
  readonly rootURL = 'http://localhost:61191/api';
  formData: MC
  Clientname: string;

  constructor(private http:HttpClient, private router: ActivatedRoute) { 
    this.router.queryParams.subscribe(params => {
      this.Clientname = params['nom du client'];
      
  });
  }
  
  postMC(formData:MC){

   return this.http.post(this.rootURL+'/MC',formData);
  }
}
