import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, signal } from '@angular/core';
import { clear } from 'console';
import { interval } from 'rxjs';
import { task } from './models/task.interface';
import { Tasks } from './services/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{

  // protected readonly title = signal('mi-proyecto');
  // ngAfterViewInit(): void implements AfterViewInit {
  //   console.log("Han sido inicializadas la vista del componente y las vistas de los hijos");

  // }

  // isDestroyed: boolean = true ;
  // countDown : number;
  // intervalID: any;

  // constructor(){
  //   this.countDown = 10;
  //   this.intervalID = setInterval(()=>{
  //   this.countDown -- ;
  //   if (this.countDown === 0) {
  //     clearInterval(this.intervalID);
  //     this.isDestroyed = false;
  //   }

  //   } , 1000) // demora 1 segundo
  // }

  // value: number = 0;
  // previusValue : number = 0;
  // changesDetected: boolean = false;

  // updateValue(): void{
  //   this.value ++;
  //   setInterval(() => {
  //     this.changesDetected= false
  //   }, 2000);

  // }


  // ngDoCheck(): void {
  //   if (this.value !== this.previusValue) {
  //     this.changesDetected = true;
  //     this.previusValue = this.value;
  //   }
  // }

  cambio: boolean = false
  tasks: task[] = [];

  constructor(private service: Tasks) {
  }

  ngOnInit(): void {
    this.tasks = this.service.getTask()
  }

  addTask(task: task): void {
    // this.tasks.push(task);
    this.service.addTask(task);
  }

  markTaskCompleted(task: task): void {
    // task.completed = !task.completed;
    this.service.completeTask(task.id);
  }

  deleteTask(id: number): void {
    // this.tasks = this.tasks.filter((task) => task.id !== id)
    this.service.deleteTask(id);
  }

}
