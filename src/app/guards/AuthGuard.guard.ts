import { Injectable } from "@angular/core"; 
import { Router,CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Tasks } from "../services/tasks";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private service: Tasks, private router: Router) {
        
    }
    canActivate(): boolean {
        if (this.service.isLoggedIn()) {
            return true;
        }else{
            alert("No se ha podido iniciar sesion")
            this.router.navigate(['/login'])
            return false;
        }
    }
}
