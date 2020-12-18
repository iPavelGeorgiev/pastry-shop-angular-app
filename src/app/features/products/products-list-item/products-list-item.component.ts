import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';

import { IProduct } from "../../../shared/interfaces/product";

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.css']
})
export class ProductsListItemComponent implements OnInit {
  @Input() product: IProduct;
  uid: string;

  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const user = localStorage.getItem("user");
    if (user) this.uid = JSON.parse(user).uid;
  }

  addToCart(productId) {
    this.db.doc(`/users/${this.uid}/cart/${productId}`).set({
      productId: this.product.id,
      quantity: 1
    })

    this.snackBar.open("The product was added to your cart", "", {
      duration: 1500,
      verticalPosition: "top",
      panelClass: ["snackbar-message"]
    });
  }
}
