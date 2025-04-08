import { Component, inject } from '@angular/core';
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

  form =this.fb.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required],
  });
  errorMassage: string | null = null;

  onSubmit(): void {
    console.log('login');
  }
}
