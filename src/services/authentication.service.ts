import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user";
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService{

    private logged: boolean = false;

    constructor(private http: HttpClient){}

    postLogIn(url: string, username: string, password: string): Observable<any>{
        const body = {
            username: username,
            password: password
        };

        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const options = {
            headers: headers,
        }
        return this.http.post(url, body, options);
    }

    postSignUp(url: string, user: User){
        this.http.post(url, user)
    }

    loggedIn(){
        return this.logged;
    }

    logIn(res: Response){
        this.logged = true;
        console.log('User logged in: ' + this.logged);
        
        const key = Object.values(res)[0];
        localStorage.setItem('token', key);
    }

    logOut(){
        this.logged = false;
        localStorage.removeItem('token');
    }

    

}