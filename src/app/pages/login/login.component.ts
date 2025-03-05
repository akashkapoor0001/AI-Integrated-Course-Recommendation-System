import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    const validEmail = 'admin@example.com';
    const validPassword = 'admin123';
  
    const enteredEmail = this.loginForm.value.email;
    const enteredPassword = this.loginForm.value.password;
  
    if (enteredEmail === validEmail && enteredPassword === validPassword) {
      localStorage.setItem('user', JSON.stringify({ email: enteredEmail }));
      this.router.navigate(['/home']);
    } else {
      alert('Invalid login credentials. Try again.');
    }
  }
  
}
