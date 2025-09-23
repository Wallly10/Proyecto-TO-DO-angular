import { Component } from '@angular/core';
import { Tasks } from '../../services/tasks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private service: Tasks, private router: Router) {

  }

  isLogin(){
    alert("Inicio de sesion exitoso");
    this.service.login();
    setTimeout(() =>{
      this.router.navigate(['/tasks']);
    }, 2000)
  }
}
