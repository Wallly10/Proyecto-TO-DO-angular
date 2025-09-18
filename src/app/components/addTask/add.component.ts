import { AfterContentInit, Component, OnDestroy, OnInit, Output, EventEmitter } from "@angular/core";
import { AppRoutingModule } from "../../app-routing-module";
import { FormsModule, NgForm, ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { task } from "../../models/task.interface";
import { StatusTask } from "../../directives/status-task";
import { ConfirmeDeleteDirective } from "../../directives/confirm.delete";
import { Tasks } from "../../services/tasks";
import { Router } from "@angular/router";

@Component({
    selector: 'app-addTask', // agregamos el nombre
    templateUrl: './add.component.html', // agregamos la ruta donde esta el archivo html
    styleUrls: ['./add.component.css'],
    standalone: false,
    // imports: [AppRoutingModule, FormsModule, CommonModule, ReactiveFormsModule], // pongo standalone true para poder importarlo en module.ts
})

export class AddComponent implements OnInit {

    @Output() taskAdded: EventEmitter<task> = new EventEmitter<task>()

    form!: FormGroup;
    numberTask!: number ;
    // isActive: boolean = true;
    // taskActive!: boolean;
    tasks: task[] = []


    constructor(private fb: FormBuilder, private service : Tasks , private router: Router) {

    }

    ngOnInit(): void {
        this.numberTask = this.tasks.length;
        this.form = this.fb.group({
            titulo: new FormControl('', [Validators.required, Validators.maxLength(20)])
        });
    }

    sendTaskTitle(): void {
        if (this.form.valid && this.form.get('titulo')?.value !== '') {
            const newTask: task ={
                id: Math.floor(Math.random()*1000),
                title: this.form.value.titulo,
                completed: false
            };
            this.service.addTask(newTask);
            this.router.navigate(['/']);        
        }      
    }

      markTaskCompleted(task: task): void {
        task.completed = !task.completed;
    }

    delete(id: number): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.numberTask = this.tasks.length;
    }

}