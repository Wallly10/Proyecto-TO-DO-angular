import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { task } from '../../models/task.interface';

@Component({
  selector: 'app-list-task',
  standalone: false,
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTask implements OnChanges{
 

  @Input('listTask') tasks: task[] = [];
  @Input('cambio') cambio: boolean = false;
   ngOnChanges(changes: SimpleChanges): void {
    if (changes['cambio']) {
      console.log("Nuevo valor", changes['cambio'].currentValue);
      
    }
  }
}
