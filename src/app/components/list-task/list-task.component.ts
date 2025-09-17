import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { task } from '../../models/task.interface';

@Component({
  selector: 'app-list-task',
  standalone: false,
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTask implements OnChanges{
 

  @Input('listTask') tasks: task[] = [];
  @Input() taskUpload : task [] = [];
  @Output() taskCompleted: EventEmitter<task> = new EventEmitter <task>();
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter <number>();

  completedTask(task: task): void{
    this.taskCompleted.emit(task);
  }

  deleteTask(id: number): void{
    this.taskDeleted.emit(id);
  }


  @Input('cambio') cambio: boolean = false;
   ngOnChanges(changes: SimpleChanges): void {
    if (changes['cambio']) {
      console.log("Nuevo valor", changes['cambio'].currentValue);
      
    }
  }
}
