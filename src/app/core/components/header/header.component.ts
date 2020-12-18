import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSignedIn: boolean;
  cartProducts: number = 0;

  constructor(
    private firebase: FirebaseService,
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firebase.isSignedIn.subscribe(value => {
      this.isSignedIn = value;
    });
    this.firebase.checkUserStatus();

    let user = localStorage.getItem("user");
    if (user) user = JSON.parse(user).uid;

    if (user) {
      const uid = JSON.parse(localStorage.getItem("user")).uid;
      this.db.collection(`/users/${uid}/cart`).snapshotChanges().subscribe(data => {
        this.cartProducts = data.length;
      });
    }
  }

  signOut(): void {
    this.firebase.signOut();
  }
}