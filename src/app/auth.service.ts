import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, user } from '@angular/fire/auth';
import { signOut, updateProfile } from 'firebase/auth';
import { from, Observable } from 'rxjs';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { UserInterface } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | null | undefined>(undefined);
  firebaseDatabase = inject(Firestore);

  register(
    email: string,
    username: string,
    password: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) =>
      updateProfile(response.user, { displayName: username }).then(() => {
        const uid: string = response.user.uid;
        return this.addData(uid, email, username); // Gibt die daten an addData weiter und startet es
      })
    );
    return from(promise);
  }

  async addData(uid: string, email: string, username: string) {
    console.log('AddData()' + uid, email, username);
    const userDocRef = doc(this.firebaseDatabase, `users/${uid}`); // Dokument mit UID als Pfad
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      console.log('Dokument existiert bereits. Keine Duplikate speichern.');
      return;
    }
    await setDoc(userDocRef, {
      username: username,
      email: email,
    });
    console.log('Daten erfolgreich hinzugefügt.');
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() => {});
    return from(promise);
  }

  logout(): Observable<void> {
    return from(signOut(this.firebaseAuth))
  }

  constructor() {}
}
