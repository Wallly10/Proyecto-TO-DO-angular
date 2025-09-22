import { Component, OnInit } from '@angular/core';
import { task } from '../../models/task.interface';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-completed-tasks',
  standalone: false,
  templateUrl: './completed-tasks.html',
  styleUrl: './completed-tasks.css'
})
export class CompletedTasks implements OnInit{

    tasksCompleted : task[] = [];

    constructor(private service: Tasks) {
      
    }
  ngOnInit(): void {
    this.tasksCompleted = this.service.getTasksCompleted();
  }
  
}
