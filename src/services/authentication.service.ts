import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user";
import {Observable, BehaviorSubject} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from "@angular/router";

import { environment } from "../environments/environment";


@Injectable()
export class AuthenticationService{

    signUpUrl: string = environment.userUrl;
    logInUrl: string = environment.logInUrl;

    constructor(private http: HttpClient, private router: Router){}

    ngOnInit(): void {}

    postLogIn(username: string, password: string): Observable<any>{
        const body = {
            username: username,
            password: password
        };
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json')
        return this.http.post(this.logInUrl, body, {headers: headers});
    }

    isLoggedIn(): boolean{        
        return sessionStorage.getItem('token') !== null;
    }

    logIn(res: Response){
        sessionStorage.setItem('token', Object.values(res)[0]);
    }

    logOut(){
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }

    signUp(name: string, surname: string,username: string, email:string, password: string){
        const body = {
            name: name,
            surname: surname,
            email: email,
            username: username,
            password: password
        }
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const options = {
            headers: headers,
        }
        return this.http.post(this.signUpUrl, body, options)
    }

    getToken(){
        return sessionStorage.getItem('token');
    }
}