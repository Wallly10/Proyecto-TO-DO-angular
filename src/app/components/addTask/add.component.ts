import { Component } from "@angular/core";

@Component({
    selector : 'app-addTask', // agregamos el nombre
    templateUrl : './add.component.html', // agregamos la ruta donde esta el archivo html
    styleUrls : ['./add.component.css'],
    standalone: true, // pongo standalone true para poder importarlo en module.ts
})

export class AddComponent {
    
}