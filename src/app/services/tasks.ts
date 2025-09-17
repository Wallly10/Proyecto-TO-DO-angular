import { Injectable } from '@angular/core';
import { task } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class Tasks {

  tasks: task[] = [];

  constructor() {
    this.getTask();
  }

  getTask(): task[] {
    this.getFromLocalStorage();
    return this.tasks;
  }

  addTask(task: task): void {
    this.tasks.push(task);
    this.setLocalStorage();
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.setLocalStorage();
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.setLocalStorage();
    }
  }

  getFromLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      const savedTask = localStorage.getItem('tasks')
      if (savedTask) {
        this.tasks = JSON.parse(savedTask);
      }
    }
  }

  setLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

}
