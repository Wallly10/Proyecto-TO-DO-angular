import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { task } from '../../models/task.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-edit-task',
  standalone: false,
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css'
})
export class EditTask {

  taskId: string | null = null;
  task: task | undefined

  form!: FormGroup;
  numberTask!: number;
  // isActive: boolean = true;
  // taskActive!: boolean;
  tasks: task[] = []


  constructor(
    private fb: FormBuilder,
    private service: Tasks,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.numberTask = this.tasks.length;
    this.form = this.fb.group({
      titulo: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      description: new FormControl('', Validators.required)

    });

    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.task = this.service.getTaskById(parseInt(this.taskId, 10))
      if (this.task) {
        this.form.patchValue({
          titulo: this.task.title
        })
      }
    }
  }

  sendTaskTitle(): void {
    if (this.form.valid && this.taskId && this.form.get('titulo')?.value !== '') {
      const updateTask: task = {
        id: parseInt(this.taskId, 10),
        title: this.form.value.titulo,
        description: this.form.value.description,
        completed: this.task ? this.task.completed : false
      };
      this.service.editTask(updateTask);
      this.router.navigate(['/tasks']);
    }
  }

  markTaskCompleted(task: task): void {
    task.completed = !task.completed;
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.numberTask = this.tasks.length;
  }

}
