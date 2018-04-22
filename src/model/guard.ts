import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate, OnInit{

    constructor(private auth: AuthenticationService, private router: Router){
        
    }

    ngOnInit(): void {
        this.auth.login.subscribe();
    }   
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log('Value from Guard: ' + this.auth.isLoggedIn());
        if (this.auth.isLoggedIn()){
            return true;
        } else{
            this.router.navigate(['/login']);
            return false;
        }

    }

    
}