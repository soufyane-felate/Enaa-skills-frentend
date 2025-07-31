import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    // Implement your login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // For demonstration purposes, navigate to the home page after login
    this.router.navigate(['/home']);
  }
}