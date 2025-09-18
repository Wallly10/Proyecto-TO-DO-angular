import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddComponent } from './components/addTask/add.component';
import { ListTask } from './components/list-task/list-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusTask } from './directives/status-task';
import { ConfirmeDeleteDirective } from './directives/confirm.delete';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EditTask } from './components/edit-task/edit-task';

@NgModule({
  declarations: [
    App,
    ListTask,
    AddComponent,
    EditTask,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StatusTask,
    ConfirmeDeleteDirective,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
