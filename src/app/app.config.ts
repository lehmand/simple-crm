import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    [provideRouter(routes)],
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simple-crm-f90c9',
        appId: '1:993563253776:web:794d7995d69ddcebc8be95',
        storageBucket: 'simple-crm-f90c9.appspot.com',
        apiKey: 'AIzaSyAtgY1hDgZQ_jjApA2appxw1gPKOcTy6Ow',
        authDomain: 'simple-crm-f90c9.firebaseapp.com',
        messagingSenderId: '993563253776',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
