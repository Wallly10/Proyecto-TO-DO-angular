import { AfterContentInit, Component, OnDestroy, OnInit } from "@angular/core";
import { AppRoutingModule } from "../../app-routing-module";

@Component({
    selector : 'app-addTask', // agregamos el nombre
    templateUrl : './add.component.html', // agregamos la ruta donde esta el archivo html
    styleUrls : ['./add.component.css'],
    standalone: true,
    imports: [AppRoutingModule], // pongo standalone true para poder importarlo en module.ts
})

export class AddComponent implements OnDestroy , AfterContentInit{
      
    //     constructor(){ 
    //     console.log("Creandose desde el constructor")
    // }

    // ngOnInit(): void {  // inicializa datos despues de que el componente se haya creado
    //     console.log("Creandose desde el ng on Init");
        
    // }

    ngOnDestroy(): void {
        console.log("El componente add ha sido destruido");
        
    }

      ngAfterContentInit(): void {
        console.log("El contenido proyectado ha sido inicializado");
        
    }
}