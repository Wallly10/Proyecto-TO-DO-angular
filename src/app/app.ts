import { AfterContentInit, AfterViewInit, Component, DoCheck, signal } from '@angular/core';
import { clear } from 'console';
import { interval } from 'rxjs';
import { task } from './models/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
 
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
 
  tasks: task[] = [
        {
            id: 1,
            title: 'tarea 1',
            completed: false
        },
        {
            id: 2,
            title: 'tarea 2',
            completed: false
        },
        {
            id: 3,
            title: 'tarea 3',
            completed: false
        },
        {
            id: 4,
            title: 'tarea 4',
            completed: false
        },
        {
            id: 5,
            title: 'tarea 5',
            completed: false
        },
        {
            id: 6,
            title: 'tarea 6',
            completed: false
        },
        {
            id: 7,
            title: 'tarea 7',
            completed: false
        }
    ]

}
