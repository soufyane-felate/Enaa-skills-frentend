import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  register() {
    // Implement your register logic here
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // For demonstration purposes, navigate to the login page after registration
    this.router.navigate(['/login']);
  }
}