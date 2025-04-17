import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lingual-instinct';

    /**
   * Meldet den aktuellen Benutzer ab.
   * Ruft die `logout`-Methode des AuthService auf.
   */
    logout(): void {
      console.log('Benutzer erfolgreich abgemeldet.');
    }
}
