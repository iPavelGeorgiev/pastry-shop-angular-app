import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from "sweetalert2";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartProducts: any[] = [];
  uid: string;
  total: number = 0;

  constructor(
    private snackBar: MatSnackBar,
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (user) user = JSON.parse(user).uid;

    if (user) {
      this.uid = JSON.parse(localStorage.getItem("user")).uid;

      this.db.collection("users")
        .doc(this.uid)
        .collection("cart")
        .snapshotChanges()
        .subscribe(data => {
          this.cartProducts = [];
          this.total = 0;
          data.forEach(a => {
            let productRef = a.payload.doc.data();
            this.db.doc(`products/${productRef.productId}`)
              .snapshotChanges()
              .subscribe(b => {
                const product: any = b.payload.data();
                product.id = b.payload.id;
                product.quantity = productRef.quantity;
                this.cartProducts.push(product);
                this.total = this.total + (product.price * productRef.quantity);
              });
          });
        });
    }
  }

  removeFromCart(productId) {
    this.db.doc(`/users/${this.uid}/cart/${productId}`).delete()

    this.snackBar.open("The product was removed from your cart", "", {
      duration: 1500,
      verticalPosition: "top",
      panelClass: ["snackbar-message"]
    });
  }

  quantityChange(event, productId) {
    let quantity = +(<HTMLInputElement>event.target).value

    if (quantity > 0) {
      this.db.doc(`/users/${this.uid}/cart/${productId}`).update({
        quantity
      });
    }
  }

  async makeAnOrder() {
    Swal.fire(
      'Order Successful',
      'Thank you for ordering. We received your order and will begin processing it soon.',
      'success'
    )
  }
}
