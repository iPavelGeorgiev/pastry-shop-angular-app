import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review: any;
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
  }

  deleteReview(reviewId) {
    this.db.doc(`/reviews/${reviewId}`).delete();
  }
}