import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import products from '../../assets/products-list.json';
import { MyProducts } from '../interfaces/my-products';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [ProductCardComponent , CommonModule  , RouterLink],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.css'
})
export class ProductsSectionComponent {

  products: Array<MyProducts> = products;

  constructor(private router : Router){}

  ShowMore(){
    this.router.navigate(['all-products'])

  }

}





