import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ttz-dashboard-1","appId":"1:683453690922:web:98de1ad51e1bbb98a6bf53","storageBucket":"ttz-dashboard-1.appspot.com","apiKey":"AIzaSyCSLIDgWlcyzDV-iL9hSwJvmKPvwjMyiJA","authDomain":"ttz-dashboard-1.firebaseapp.com","messagingSenderId":"683453690922","measurementId":"G-CPS6XV2CWN"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
