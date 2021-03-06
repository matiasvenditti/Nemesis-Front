import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private auth: AuthenticationService, private router: Router){
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (sessionStorage.getItem('token')){
            return true;
        } else{
            this.router.navigate(['/login']);
            return false;
        }

    }

    
}