import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddComponent } from './components/addTask/add.component';
import { ListTask } from './components/list-task/list-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ListTask,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddComponent, // como es standalone y en angular nuevo se pone aca y no en declaration
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
