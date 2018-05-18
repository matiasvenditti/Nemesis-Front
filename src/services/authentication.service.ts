import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user";
import {Observable, BehaviorSubject} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from "@angular/router";


@Injectable()
export class AuthenticationService{

    constructor(private http: HttpClient, private router: Router){}

    ngOnInit(): void {}

    postLogIn(url: string, username: string, password: string): Observable<any>{
        const body = {
            username: username,
            password: password
        };
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json')
        return this.http.post(url, body, {headers: headers});
    }

    isLoggedIn(): boolean{
        return localStorage.getItem('token') !== undefined;
    }

    logIn(res: Response){
        localStorage.setItem('token', Object.values(res)[0]);
    }

    logOut(){
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    signUp(url: string, name: string, surname: string,username: string, email:string, password: string){
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
        return this.http.post(url, body, options)
    }

    getToken(){
        return localStorage.getItem('token');
    }
}