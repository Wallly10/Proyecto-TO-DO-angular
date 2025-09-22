import { Injectable } from '@angular/core';
import { task } from '../models/task.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tasks {

  tasks: task[] = [];
  tasksCompleted: task[] = [];
  tasksDeleted: task[] = [];

  taskChanged = new Subject<task[]>();
  taskDeletedChanged = new Subject<task[]>();

  constructor() {
    this.getTask();
  }

  getTask(): task[] {
    this.getFromLocalStorage();
    return this.tasks;
  }

  getTaskDeleted(): task[] {
    return this.tasksDeleted;
  }

  getTasksCompleted(): task[] {
    this.getFromLocalStorage();
    this.tasksCompleted = this.tasks.filter(task => task.completed === true);
    return this.tasksCompleted
  }

  addTask(task: task): void {
    this.tasks.push(task);
    this.setLocalStorage();
    this.taskChanged.next(this.tasks.slice());
  }

  deleteTask(id: number): void {
    const taskToDelete = this.tasks.find(task => task.id === id)
    if (taskToDelete) {
      this.tasksDeleted.push(taskToDelete);
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.setLocalStorage();
      this.taskChanged.next(this.tasks.slice());
    }
  }

  returnTaskDeleted(task: task): void {
    if (!this.tasks.some(t => t.id === task.id)) {
      this.tasks.push(task);
      this.tasksDeleted = this.tasksDeleted.filter(t => t.id !== task.id);
      this.taskChanged.next(this.tasks.slice());
      this.taskDeletedChanged.next(this.tasksDeleted.slice());
      this.setLocalStorage();
    }
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.setLocalStorage();
      this.taskChanged.next(this.tasks.slice());
    }
  }

  getFromLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      const savedTask = localStorage.getItem('tasks')
      if (savedTask) {
        this.tasks = JSON.parse(savedTask);
        this.taskChanged.next(this.tasks.slice());

      }

      const deleteTask = localStorage.getItem('tasks deleted')
      if (deleteTask) {
        this.tasksDeleted = JSON.parse(deleteTask);
        this.taskDeletedChanged.next(this.tasksDeleted.slice());

      }
    }
  }

  editTask(updateTask: task): void {
    const index = this.tasks.findIndex(task => task.id === updateTask.id);
    if (index !== -1) {
      this.tasks[index] = { ...updateTask }
      this.setLocalStorage();
      this.taskChanged.next(this.tasks.slice());
    }
  }

  getTaskById(id: number): task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  setLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      localStorage.setItem('tasks deleted', JSON.stringify(this.tasksDeleted));
    }
  }

}
