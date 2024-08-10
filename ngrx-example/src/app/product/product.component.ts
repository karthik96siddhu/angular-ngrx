import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products!: Observable<Product[]>;



  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.product)
    console.log('products => ', this.products)
   }

  ngOnInit(): void {
  }

  addProduct(name:any, price:any) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product> {
        name: name,
        price: price
      }
    })
  }

}
