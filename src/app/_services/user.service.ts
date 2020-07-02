import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { AddClient } from '../shared/add-client.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Injectable({ providedIn: 'root' })
export class UserService {
    formData:User;
    fomData:AddClient;
    
    public currentSyntheseSubject: BehaviorSubject<AddClient>;
    public currentSynthese: Observable<AddClient>;

    readonly rootURL = 'http://localhost:62933/api';
    
    constructor(private http: HttpClient) { 
        this.currentSyntheseSubject = new BehaviorSubject<AddClient>(JSON.parse(localStorage.getItem('currentSynthese')));
        this.currentSynthese = this.currentSyntheseSubject.asObservable();
        
    }

    getAll() {
        return this.http.get<User[]>(this.rootURL+ '/users');
    }

    getById(id: number) {
        return this.http.get(this.rootURL+`/users/${id}`);
    }
    getByIdSynthese(idSynthese: number) {
        return this.http.get(this.rootURL + `/AddClients/${idSynthese}`);
        
    }
    register(user: User) {
        return this.http.post(this.rootURL+`/users/register`, user);
    }

    update(user: User) {
        return this.http.put(this.rootURL+`/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(this.rootURL+`/users/${id}`);
    }
    postAddClient(formData:AddClient){

        return this.http.post(this.rootURL+'/AddClients',formData)
            .pipe(map(Synthese => {
             localStorage.setItem('currentSynthese', JSON.stringify(Synthese));
                
                return Synthese;

      
            
    }))
}
     
      getAddClient(){
    
        return this.http.get<AddClient[]>(this.rootURL+`/AddClients`);
       }
}