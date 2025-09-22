import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { task } from '../../models/task.interface';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-details-tasks',
  standalone: false,
  templateUrl: './details-tasks.html',
  styleUrl: './details-tasks.css'
})
export class DetailsTasks implements OnInit {

  task: task | undefined


  constructor(private route: ActivatedRoute, private service: Tasks) {

  }

  ngOnInit(): void {
    const taskId = Number (this.route.snapshot.paramMap.get('id'));
    this.task = this.service.getTaskById(taskId);
  }
}
