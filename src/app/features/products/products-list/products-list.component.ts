import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProduct } from "../../../shared/interfaces/product";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection("products", q => q.orderBy("timestamp"))
      .snapshotChanges()
      .subscribe(data => {
        this.products = [];

        data.forEach(a => {
          let product: any = a.payload.doc.data();
          product.id = a.payload.doc.id;
          this.products.push(product);
        });
      });
  }
}