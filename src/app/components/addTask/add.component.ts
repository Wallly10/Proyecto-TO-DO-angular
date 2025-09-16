import { AfterContentInit, Component, OnDestroy, OnInit, Output, EventEmitter } from "@angular/core";
import { AppRoutingModule } from "../../app-routing-module";
import { FormsModule, NgForm, ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { task } from "../../models/task.interface";
import { StatusTask } from "../../directives/status-task";
import { ConfirmeDeleteDirective } from "../../directives/confirm.delete";

@Component({
    selector: 'app-addTask', // agregamos el nombre
    templateUrl: './add.component.html', // agregamos la ruta donde esta el archivo html
    styleUrls: ['./add.component.css'],
    standalone: true,
    imports: [AppRoutingModule, FormsModule, CommonModule, ReactiveFormsModule, StatusTask,ConfirmeDeleteDirective], // pongo standalone true para poder importarlo en module.ts
})

export class AddComponent implements OnInit {

    @Output() taskAdded: EventEmitter<task> = new EventEmitter<task>()

    form!: FormGroup;
    numberTask!: number ;
    // isActive: boolean = true;
    // taskActive!: boolean;
    tasks: task[] = []


    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): void {
        this.form = this.fb.group({
            titulo: new FormControl('', [Validators.required, Validators.maxLength(10)])
        });
    }

    sendTaskTitle(): void {
        if (this.form.valid && this.form.get('titulo')?.value !== '') {
            const newTask: task ={
                id: Math.floor(Math.random()*1000),
                title: this.form.value.titulo,
                completed: false
            };
            console.log("EMITIENDO TAREA", newTask); // <--- DEBUG
            this.taskAdded.emit(newTask);
            this.form.reset();
            // this.taskActive = false;
            // console.log(this.form.value.titulo);
        } 
        // else {
        //     this.taskActive = true;
        // }
    }

      markTaskCompleted(task: task): void {
        task.completed = !task.completed;
    }

    delete(id: number): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.numberTask = this.tasks.length;
    }

    // tituloTarea: string = '';
    // activeButton: boolean = true;


    // sendData(form: NgForm) {
    //     if (form.valid) {
    //         console.log(this.tituloTarea);
    //     }
    // }

    // sendTask() {
    //     const tamanioTituloTarea = this.tituloTarea.split('');
    //     if (tamanioTituloTarea.length > 0) {
    //         this.activeButton = false;
    //     } else {
    //         this.activeButton = true;
    //     }

    //     console.log(`La tarea se ha enviado con éxito! ${this.tituloTarea}`);
    // }

  

}