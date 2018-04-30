import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { User } from "../model/user";
import {Observable, BehaviorSubject} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthenticationService implements OnInit {

    private loginSubject = new BehaviorSubject<boolean>(false);
    login = this.loginSubject.asObservable();

    constructor(private http: HttpClient){}

    ngOnInit(): void {}

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

    isLoggedIn(): boolean{
        return this.loginSubject.getValue();
    }

    logIn(res: Response){
        this.loginSubject.next(true);
        localStorage.setItem('token', Object.values(res)[0]);
    }

    logOut(){
        this.loginSubject.next(false);
        localStorage.clear();
        // localStorage.removeItem('token');
    }

    signUp(url: string,name: string, surname: string,username: string, email:string, password: string){
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
}