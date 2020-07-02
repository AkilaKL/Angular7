import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models';
import { AddClient } from '../shared/add-client.model';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    readonly rootURL = 'http://localhost:62933/api';
    private currentUserSubject: BehaviorSubject<User>;
    public currentSyntheseSubject: BehaviorSubject<AddClient>;
    public currentUser: Observable<User>;
    public currentSynthese: Observable<AddClient>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentSyntheseSubject = new BehaviorSubject<AddClient>(JSON.parse(localStorage.getItem('currentSynthese')));
        this.currentSynthese = this.currentSyntheseSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    public get currentSyntheseValue(): AddClient {
        return this.currentSyntheseSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(this.rootURL+`/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }
    postAddClient(IdSynthese: number) {
        return this.http.post<any>(this.rootURL+`/AddClients`, { IdSynthese })
            .pipe(map(Synthese => {
                // login successful if there's a jwt token in the response
                if (Synthese ) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentSynthese', JSON.stringify(Synthese));
                    this.currentSyntheseSubject.next(Synthese);
                }

                return Synthese;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}