import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  router = inject(Router);

  /**
   * Reaktives Formular mit den Feldern `Username`, `email` und `password`.
   * Alle Felder sind als erforderlich markiert (Validators.required).
   */
  form = this.fb.nonNullable.group({
    Username: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    console.log('register');
  }
}
