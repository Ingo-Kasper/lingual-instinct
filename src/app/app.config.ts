import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const firebaseConfig = {
  apiKey: "AIzaSyApf7Vsl1sMuwLTZyHAZ-eIwYXOtMeYJM0",
  authDomain: "lingual-instinct.firebaseapp.com",
  projectId: "lingual-instinct",
  storageBucket: "lingual-instinct.firebasestorage.app",
  messagingSenderId: "229900336597",
  appId: "1:229900336597:web:9594dba1ec75787179515c",
  measurementId: "G-FZ2LH9KLQW"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};
