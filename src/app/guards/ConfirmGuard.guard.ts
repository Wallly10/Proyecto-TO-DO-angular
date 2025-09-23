import { Injectable } from "@angular/core";
import { Router, CanDeactivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";

interface CanComponentDeactive {
    canDeactive: () => boolean
}

@Injectable({
    providedIn: 'root'
})

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactive> {


    constructor(private router: Router) {

    }

    canDeactivate(): boolean {
        const confirmDeactive = window.confirm("Estas seguro que quieres salir de esta pagina?")

        if (confirmDeactive) {
            setTimeout(() => {
                this.router.navigate(['/login'])
            }, 0)
            return true;
        } else {
            return false;
        }
    }
}
