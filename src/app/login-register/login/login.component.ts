import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required],
  });
  errorMassage: string | null = null;

  onSubmit(): void {
    console.log('login');
  }
}
