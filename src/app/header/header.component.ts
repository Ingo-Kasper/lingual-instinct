import { Component, inject, OnInit  } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  authService = inject(AuthService);

  /**
   * Initialisiert die Komponente und abonniert Benutzerinformationen.
   * Speichert den Zustand des aktuellen Benutzers in einem Signal.
   */
  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        // Updates the user information in the signal
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        // Resets user information if no user is logged in
        this.authService.currentUserSig.set(null);
      }
    });
  }
}
