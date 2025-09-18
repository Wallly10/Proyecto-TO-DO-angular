import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { task } from '../../models/task.interface';
import { Tasks } from '../../services/tasks';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-task',
  standalone: false,
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTask implements OnChanges{
 

  tasks: task[] = [];
  taskUpload : task [] = [];
  private subscription! : Subscription;

  // @Output() taskCompleted: EventEmitter<task> = new EventEmitter <task>();
  // @Output() taskDeleted: EventEmitter<number> = new EventEmitter <number>();

  constructor(private service: Tasks , private router: Router) {
    this.tasks = this.service.getTask()
    this.subscription = this.service.taskChanged.subscribe(task => {
      this.tasks = task;
    })
  }

  completedTask(task: task): void{
    this.service.completeTask(task.id);
  }

  deleteTask(id: number): void{
    this.service.deleteTask(id);
  }

  editTask(id:number): void{
    this.router.navigate([`/edit/${id}`]);
  }


  @Input('cambio') cambio: boolean = false;
   ngOnChanges(changes: SimpleChanges): void {
    if (changes['cambio']) {
      console.log("Nuevo valor", changes['cambio'].currentValue);
      
    }
  }
}
