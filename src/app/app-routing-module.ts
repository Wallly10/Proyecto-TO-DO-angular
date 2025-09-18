import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTask } from './components/list-task/list-task.component';
import { AddComponent } from './components/addTask/add.component';
import { EditTask } from './components/edit-task/edit-task';

const routes: Routes = [
  {
    path: 'tasks',
    component: ListTask
  },
  {
    path: 'create',
    component: AddComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: EditTask
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
