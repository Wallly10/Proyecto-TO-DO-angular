import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { task } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private http: HttpClient) {
  }

  APIurl = 'https://jsonplaceholder.typicode.com/todos'

  loadTask(): Observable<task>{
    return this.http.get<task>(this.APIurl);
  }
}
