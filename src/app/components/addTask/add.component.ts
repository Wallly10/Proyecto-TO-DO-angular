import { AfterContentInit, Component, OnDestroy, OnInit } from "@angular/core";
import { AppRoutingModule } from "../../app-routing-module";
import { FormsModule, NgForm, ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'app-addTask', // agregamos el nombre
    templateUrl : './add.component.html', // agregamos la ruta donde esta el archivo html
    styleUrls : ['./add.component.css'],
    standalone: true,
    imports: [AppRoutingModule, FormsModule, CommonModule,ReactiveFormsModule], // pongo standalone true para poder importarlo en module.ts
})

export class AddComponent implements OnInit{
      
    //     constructor(){ 
    //     console.log("Creandose desde el constructor")
    // }
    // implements OnDestroy , AfterContentInit
    // ngOnInit(): void {  // inicializa datos despues de que el componente se haya creado
    //     console.log("Creandose desde el ng on Init");
        
    // }

    // ngOnDestroy(): void {
    //     console.log("El componente add ha sido destruido");
        
    // }

    //   ngAfterContentInit(): void {
    //     console.log("El contenido proyectado ha sido inicializado");
        
    // }

    form!: FormGroup;

    constructor(private fb:FormBuilder) {

    }
    
     ngOnInit(): void {
        this.form = this.fb.group({
            titulo: new FormControl('', [Validators.required, Validators.maxLength(10)])
        });
    }

    sendTaskTitle():void{
        if (this.form.valid) {
            console.log(this.form.value.titulo);
            
        }
    }






    numberTask : number = 10;
    tituloTarea : string = '';
    activeButton : boolean = true;


    sendData(form: NgForm){
        if (form.valid) {
            console.log(this.tituloTarea);
        }
    }

    sendTask(){
        const tamanioTituloTarea = this.tituloTarea.split('');
        if (tamanioTituloTarea.length > 0) {
            this.activeButton = false;
        }else{
            this.activeButton = true;
        }

    console.log(`La tarea se ha enviado con éxito! ${this.tituloTarea}`);
    }
}