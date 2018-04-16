import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user";
import 'rxjs/add/operator/do';

@Injectable()
export class AuthenticationService{

    constructor(private http: HttpClient){}

    postLogIn(url: string, username: string, password: string){
        const body = {
            username, password
        };
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const options = {
            headers: headers,
        }
        this.http.post(url, body, options).do(
            data =>{
                console.log(data);
                
            }
        )
    }

    postSignUp(url: string, user: User){
        this.http.post(url, user)
    }

}