import { Directive, HostListener, Input } from "@angular/core"; 

@Directive({
    selector: '[appConfirmeDelete]'
})

export class ConfirmeDeleteDirective {
    
    @Input('appConfirmeDelete') taskTitle: String =''

    constructor() {    
    }

    @HostListener('click' , ['$event']) onClick(event:Event){
        event.preventDefault()
        event.stopPropagation()

        const confirmed  = confirm(`¿Esta seguro de eliminar la tarea ${this.taskTitle}?`);
        if (confirmed) {
            alert("Eliminado con exito");
        }else{
            alert("No se ha podido eliminar");
        }
    }

}