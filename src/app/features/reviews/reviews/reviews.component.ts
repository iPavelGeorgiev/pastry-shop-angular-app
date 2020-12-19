import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from "sweetalert2";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any;
  user: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    const user = localStorage.getItem("user");
    if (user) this.user = JSON.parse(user);

    this.db.collection("reviews", q => q.orderBy("timestamp", "desc"))
      .snapshotChanges()
      .subscribe(data => {
        this.reviews = [];

        data.forEach(a => {
          let review: any = a.payload.doc.data();
          review.id = a.payload.doc.id;
          review.currentId = this.user.uid
          this.reviews.push(review);
        });
      });
  }

  async writeReview() {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })

    if (text) {
      let email = this.user.email;
      let hide = email.split("@")[0].length - 3;
      let regex = new RegExp(".{" + hide + "}@", "g")
      email = email.replace(regex, "***@");

      this.db.doc(`/reviews/${this.user.uid}`).set({
        userEmail: email,
        text,
        timestamp: new Date()
      });
      Swal.fire(text)
    }
  }
}
