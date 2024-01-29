import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import products from '../../assets/products-list.json';
import { MyProducts } from '../interfaces/my-products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent , CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Array<MyProducts> = products;
}







