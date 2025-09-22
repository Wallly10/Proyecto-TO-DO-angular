import { Component, OnDestroy, OnInit } from '@angular/core';
import { task } from '../../models/task.interface';
import { Subscription } from 'rxjs';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-deleted-tasks',
  standalone: false,
  templateUrl: './deleted-tasks.html',
  styleUrl: './deleted-tasks.css'
})
export class DeletedTasks implements OnInit, OnDestroy{

  tasksDeleted : task [] = [];
  private tasksDeletedSub! : Subscription;

  constructor(private service: Tasks) {
    
  }

  ngOnInit(): void {
    this.tasksDeleted = this.service.getTaskDeleted();
    this.tasksDeletedSub = this.service.taskDeletedChanged.subscribe((tasksDeleted: task[]) =>{
      this.tasksDeleted = tasksDeleted;
    })
  }

  ngOnDestroy(): void {
    this.tasksDeletedSub.unsubscribe();
  }

  returnTask (task: task):void{
    this.service.returnTaskDeleted(task);
  }

}
