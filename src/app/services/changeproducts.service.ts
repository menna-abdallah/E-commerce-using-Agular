import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyProducts } from '../interfaces/my-products';


@Injectable({
  providedIn: 'root'
})
export class ChangeproductsService {

  private products = new BehaviorSubject<MyProducts[]>([]);

  constructor() { }

  
  getProducts() {
    return this.products.asObservable();
  }
 

  addProduct(newProduct: MyProducts) {
    const currentProducts = this.products.value;
    const updatedProducts = [...currentProducts, newProduct];
    this.products.next(updatedProducts);
  }
 

  removeFromCart(index : number) {
    const currVal = this.products.value;
    currVal.splice(index, 1);
    console.log(currVal);
    this.products.next(currVal);
  }
}
