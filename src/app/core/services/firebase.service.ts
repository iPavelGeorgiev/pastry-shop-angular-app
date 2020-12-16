import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isSignedIn: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public firebaseAuth: AngularFireAuth,
    private router: Router
  ) { }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isSignedIn.emit(true);
        localStorage.setItem("user", JSON.stringify(res.user));
        this.router.navigate([""]);
      });
  }

  async signUp(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isSignedIn.emit(true);
        localStorage.setItem("user", JSON.stringify(res.user));
        this.router.navigate([""]);
      });
  }

  signOut(): void {
    this.isSignedIn.emit(false);
    this.firebaseAuth.signOut();
    localStorage.removeItem("user");
    this.router.navigate([""]);
  }

  checkUserStatus(): void {
    this.firebaseAuth.user.subscribe(user => {
      if (user !== null) {
        this.isSignedIn.emit(true);
      } else {
        this.isSignedIn.emit(false);
      }
    })
  }
}
