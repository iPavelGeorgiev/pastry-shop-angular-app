import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSignedIn: boolean;

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
    this.firebase.isSignedIn.subscribe(value => {
      this.isSignedIn = value;
    });
    this.firebase.checkUserStatus();
  }

  signOut(): void {
    this.firebase.signOut();
  }
}