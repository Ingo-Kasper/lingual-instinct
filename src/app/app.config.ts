import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importiert die Routen.
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Firebase-Konfiguration: Details zur App- und Datenbankverbindung.
const firebaseConfig = {
  apiKey: 'AIzaSyD0sL9Yy4C9phaBc8FXOxcJb2SmEa3OkLo',
  authDomain: 'dabubble-projekt-von-kasper.firebaseapp.com',
  projectId: 'dabubble-projekt-von-kasper',
  storageBucket: 'dabubble-projekt-von-kasper.firebasestorage.app',
  messagingSenderId: '264595788933',
  appId: '1:264595788933:web:97aada3641ca4a1b4c05ec',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    pro
  ],
};
