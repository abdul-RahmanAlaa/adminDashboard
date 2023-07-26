import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  authState: boolean;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.authState = false;

    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.authState = true;
      } else {
        this.authState = false;
      }
    });
  }

  loginFire(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('logged in successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logout() {
    this.afAuth.signOut();
  }
}
