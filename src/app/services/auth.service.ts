import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  // authentification  (email:wajditest@wajdi.com,password:wajdi123)
  Authentification(eamil: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(eamil, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['home/dashboard']);
      },
      (err) => {
        alert('verifier vos donnees svp');
        this.router.navigate;
        ['/login'];
      }
    );
  }

  // register
  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Registration  Succsuflly');

        this.router.navigate(['/login']);
      },
      (err) => {
        alert('Registration  Failed');
        this.router.navigate(['/register']);
      }
    );
  }

  // logOut
  logOut() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
