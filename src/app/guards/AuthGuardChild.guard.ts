import { Injectable } from "@angular/core"; 
import { Router,CanActivateChild, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Tasks } from "../services/tasks";

@Injectable({
    providedIn: 'root'
})

export class AuthGuardChild implements CanActivateChild {
    constructor(private service: Tasks, private router: Router) {
        
    }
    canActivateChild(): boolean {
        if (this.service.authRoutesChild()) {
            return true;
        }else{
            alert("No se ha podido acceder a estas rutas")
            setTimeout(() =>{
            this.router.navigate(['/login'])
            },2000)
            return false;
        }
    }
}
