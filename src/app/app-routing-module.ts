import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTask } from './components/list-task/list-task.component';
import { AddComponent } from './components/addTask/add.component';
import { EditTask } from './components/edit-task/edit-task';
import { CompletedTasks } from './components/completed-tasks/completed-tasks';
import { DetailsTasks } from './components/details-tasks/details-tasks';
import { DeletedTasks } from './components/deleted-tasks/deleted-tasks';
import { Login } from './components/login/login';
import { AuthGuard } from './guards/AuthGuard.guard';
import { AuthGuardChild } from './guards/AuthGuardChild.guard';
import { CanDeactivateGuard } from './guards/ConfirmGuard.guard';

const routes: Routes = [
  {
    path: 'tasks',
    component: ListTask,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuardChild],
    // canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: 'completed',
        component: CompletedTasks
      },
      {
        path: 'details/:id',
        component: DetailsTasks
      },
      {
        path: 'deleted',
        component: DeletedTasks
      }
    ]
  },
  {
    path:'login',
    component: Login
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
